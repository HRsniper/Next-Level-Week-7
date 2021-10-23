defmodule HeatTagsWeb.HomeView do
  use HeatTagsWeb, :view

  def render("ok.json", _assigns) do
    %{
      server: "✅ Server is running"
    }
  end
end
