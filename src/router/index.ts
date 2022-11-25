import { Router } from "express";
import homeRouter from "./homeRouter";
import tripRouter from "./tripRouter";
import myTripRouter from "./myTripRouter";

const router: Router = Router();

router.use("/home", homeRouter);
router.use("/trip", tripRouter);
router.use("/myTrip", myTripRouter);

export default router;
