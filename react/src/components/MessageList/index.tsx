import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import io from "socket.io-client";
import logoImg from "../../assets/logo.svg";
import { api } from "../../services/api";
import { WordCloud } from "../WordCloud";
import styles from "./styles.module.scss";
import { BsFillCloudsFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

let messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");

socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    api.get<Message[]>("messages/last3").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.messageListWrapper}>
      <div className={styles.imgBtnWrapper}>
        <img className={styles.logo} src={logoImg} alt="DoWhile 2021" />
        <button
          className={styles.Button}
          type="button"
          onClick={openModal}
          onMouseOver={(e) => console.log(e)}
        >
          <BsFillCloudsFill />
        </button>
      </div>

      <Modal className={styles.Modal} overlayClassName={styles.Overlay} isOpen={modalIsOpen}>
        <button className={styles.Button} type="button" onClick={closeModal}>
          <VscChromeClose />
        </button>
        <WordCloud />
      </Modal>

      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <motion.li
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className={styles.message}
              key={message.id}
            >
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
