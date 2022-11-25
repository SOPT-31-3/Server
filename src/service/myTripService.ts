import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 내 여행 정보 조회
const getAllTrip = async () => {
  const data = await prisma.schedule.findMany();

  return data;
};

const myTripService = {
  getAllTrip
};

export {
  myTripService
};