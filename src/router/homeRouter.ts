import { Router } from "express";
import { homeController } from "../controller";

const router: Router = Router();

router.get("/:tripId", homeController.getHomeById);

export default router;