import { Request, Response } from "express";
import { homeService } from "../service";

const getHomeById = async (req: Request, res: Response) => {
  const { tripId } = req.params;

  const data = await homeService.getHomeById(+tripId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "홈 화면 조회 성공", data });
};

const homeController = {
    getHomeById,
}; 

export default homeController;