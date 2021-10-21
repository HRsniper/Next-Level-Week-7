import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // enable if you are going to run the 'npm run dev' command,
  // without passing the '--host 0.0.0.0' parameter.
  // without host '0.0.0.0' the docker container is not exposed.
  // IF NOT USING DOCKER IT IS NOT NECESSARY TO ACTIVATE,
  // 'npm run dev' will run normally.
  // server: {
  //   host: "0.0.0.0"
  // },
  plugins: [react()]
});
