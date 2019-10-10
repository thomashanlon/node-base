import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.disable("x-powered-by");
app.use(morgan("combined"));
app.use(bodyParser.json());

// Routes
app.use("/", routes);

export default app;
