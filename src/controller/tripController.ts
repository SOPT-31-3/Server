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

const tripController = {
  createTrip,
};

export default tripController;
