defmodule HeatTagsWeb.TagsView do
  use HeatTagsWeb, :view

  def render("words.json", %{words: map}) do
    %{
      result: "Words!",
      words: map
    }
  end
end
