import { Request, Response } from "express";
import { myTripService } from "../service";

const getAllTrip = async (req: Request, res: Response) => {
  const data = await myTripService.getAllTrip();

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "내 여행 조회 성공", data });
};

const myTripController = {
    getAllTrip,
}; 

export default myTripController;