import { Request, Response } from "express";
import tripService from "../service/tripService";

//* 여행 생성
//* POST /trip
const createTrip = async (req: Request, res: Response) => {
  const data = await tripService.createTrip();

  if ( !data ) {
    return res.status(404).json({ status: 404, message: "여행 생성 실패" });
  }  
  return res.status(200).json({ status: 200, message: "여행 생성 성공", data });
}

//* 도시 선택
//* PUT /trip/:tripId/city
const updateCity = async (req: Request, res: Response) => {
  const { tripId } = req.params;
  const { city, imageUrl } = req.body;

  if ( !city ) {
    return res.status(400).json({ status: 400, message: "도시 등록 실패" });
  }

  const data = await tripService.updateCity(+tripId, city, imageUrl);

  if ( !data ) {
    return res.status(404).json({ status: 404, message: "도시 등록 실패" });
  }  
  return res.status(200).json({ status: 200, message: "도시 등록 성공", data });
}

//* 일정 생성
//* GET /trip/:tripId/plan
const createDay = async (req: Request, res: Response) => {
  const { tripId } = req.params;

  const data = await tripService.createDay(+tripId);

  return res.status(200).json({ status: 200, message: "일정 생성 성공", data });
}

const tripController = {
  createTrip,
  updateCity,
  createDay,
};

export default tripController;
