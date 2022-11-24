import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// tripId로 홈 화면 여행정보 조회
const getHomeById = async (tripId: number) => {
  const data = await prisma.trip.findUnique({
    where: {
      tripId: tripId,
    },
  });

  return data;
};

const homeService = {
  getHomeById
};

export {
  homeService,
};