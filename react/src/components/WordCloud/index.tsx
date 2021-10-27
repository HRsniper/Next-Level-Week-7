import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { colors } from "../../styles/theme/colors";
import styles from "./styles.module.scss";

interface IWordsResponse {
  result: string;
  words: string;
}

type IWordsParsed = {
  [key: string]: number;
}[];

type IWords = {
  tag: string;
  count: number;
}[];

export function WordCloud() {
  const [words, setWords] = useState<IWordsParsed>([]);
  let arrayWords = [] as IWords;

  async function getWords() {
    const response = await axios.get<IWordsResponse>("http://localhost:4444/api/words");
    const words = response.data.words;
    const wordsReplaced = words.replace(/",/g, `":`); // {"word", 1} to {"word": 1}
    const wordsParsed = JSON.parse(wordsReplaced) as IWordsParsed;
    // console.log(wordsParsed);
    setWords(wordsParsed);
    return wordsParsed;
  }

  useEffect(() => {
    (async () => {
      await getWords();
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(
      async () => {
        await getWords();
      },
      1000 * 60 // every minute
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_material);

    let chart = am4core.create("wordCloudContainer", am4plugins_wordCloud.WordCloud);
    chart.responsive.enabled = true;

    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;

    for (const [_key, value] of Object.entries(words)) {
      // console.log({ tag: String(Object.keys(value)), count: Number(Object.values(value)) });
      arrayWords.push({ tag: String(Object.keys(value)), count: Number(Object.values(value)) });
    }
    series.data = arrayWords;

    series.dataFields.word = "tag";
    series.dataFields.value = "count";
    series.colors = new am4core.ColorSet();

    let hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color(colors.WHITE);

    let title = chart.titles.create();
    title.fill = am4core.color(colors.WHITE);
    title.text = "Most popular words on DoWhile 2021";
    title.fontSize = "2.5rem";
    title.fontWeight = "700";
  }, [words]);

  return <div id="wordCloudContainer" className={styles.wordCloudContainer}></div>;
}
