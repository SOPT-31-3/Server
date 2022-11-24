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

//* 도시 등록
const updateCity = async (tripId: number, city: string, imageUrl: string) => {
  const data = await prisma.trip.update({
    where: {
      id: tripId,
    },
    data: {
      city: city,
      imageUrl: imageUrl,
    },
  })

  return data;
};

//* 일정 생성
const createDay = async (tripId: number) => {
  const data = await prisma.day.createMany({
    data: [
      { tripId: tripId, date: '2023-02-04' }, 
      { tripId: tripId, date: '2023-02-05' }, 
      { tripId: tripId, date: '2023-02-06' }
    ]
  });

  const returnData = await prisma.day.findMany({
    where: {
      tripId: tripId,
    },
  });

  return returnData;
}

const tripService = {
  createTrip,
  updateCity,
  createDay,
}

export default tripService;
