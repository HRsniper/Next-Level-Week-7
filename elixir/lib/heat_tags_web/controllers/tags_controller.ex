defmodule HeatTagsWeb.TagsController do
  use HeatTagsWeb, :controller

  alias HeatTags.Tags.Count

  def get(conn, _params) do
    conn
    |> Count.call()
    |> handle_words(conn)
  end

  defp handle_words(map, conn) do
    conn
    |> put_status(:ok)
    |> render("words.json", words: map)
  end
end
