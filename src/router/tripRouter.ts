import { Router } from "express";
import { tripController } from "../controller";

const router: Router = Router();

//* 여행 생성
router.post("/", tripController.createTrip);

export default router;
