import { Router } from "express";
import homeRouter from "./homeRouter";
import tripRouter from "./tripRouter";

const router: Router = Router();

router.use("/home", homeRouter);
router.use("/trip", tripRouter);

export default router;
