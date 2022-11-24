import { Router } from "express";
import tripRouter from "./tripRouter";

const router: Router = Router();

router.use("/trip", tripRouter);

export default router;
