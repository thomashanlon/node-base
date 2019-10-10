import { Router } from "express";
import matchRoutes from "./match";

const routes = Router();

routes.use("/match", matchRoutes);

routes.get("/ping", (req, res) => {
  res.status(200).json({ pong: true });
});

// Catch 404 and forward to error handler
routes.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
routes.use((err, req, res) => {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).render("error", {
    message: err.message
  });
});

export default routes;
