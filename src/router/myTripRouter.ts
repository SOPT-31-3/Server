import { Router } from "express";
import { myTripController } from "../controller";

const router: Router = Router();

router.get("/", myTripController.getAllTrip);

export default router;