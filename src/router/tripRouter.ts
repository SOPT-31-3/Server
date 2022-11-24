import { Router } from "express";
import { tripController } from "../controller";

const router: Router = Router();

//* 여행 생성
router.post("/", tripController.createTrip);
//* 도시 선택
router.put("/:tripId/city", tripController.updateCity);
//* 일정 생성
router.post("/:tripId/plan", tripController.createDay);

export default router;
