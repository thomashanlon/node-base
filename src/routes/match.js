import { Router } from "express";

const routes = Router();

routes.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ matchId: id });
});

export default routes;
