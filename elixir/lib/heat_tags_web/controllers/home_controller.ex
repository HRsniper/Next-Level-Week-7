defmodule HeatTagsWeb.HomeController do
  use HeatTagsWeb, :controller

  def index(conn, _params) do
    conn
    |> put_status(:ok)
    |> render("ok.json")
  end
end
