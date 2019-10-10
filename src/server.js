import app from "./app";
import { appConfig } from "./config";

app.listen(appConfig.port, () => console.log(`Listening on port ${appConfig.port}`)); // eslint-disable-line no-console
