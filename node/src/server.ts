import { serverHttp } from "./app";

const PORT = process.env.PORT || 4000;
const ADDRESS = serverHttp.address();

serverHttp.listen(PORT, () =>
  console.log(`✅ Server is running on ${ADDRESS === null ? "" : ADDRESS}:${PORT}`)
);
