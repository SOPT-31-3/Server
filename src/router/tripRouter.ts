import { Router } from "express";
import { tripController } from "../controller";

const router: Router = Router();

//* 여행 생성
router.post("/", tripController.createTrip);
//* 도시 선택
router.put("/:tripId/city", tripController.updateCity);
//* 전체 일정 저장
router.post("/plan/allPlan", tripController.saveAllPlan);

export default router;
