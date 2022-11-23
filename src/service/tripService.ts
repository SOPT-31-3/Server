import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 여행 생성
const createTrip = async () => {
  const data = await prisma.trip.create({
    data: {
      startDate: '2023-02-04',
      endDate: '2023-02-06'
    }
  });

  return data;
};

const tripService = {
  createTrip,
}

export default tripService;
