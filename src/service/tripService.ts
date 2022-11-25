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

//* 전체 일정 저장
// const saveAllPlan = async () => {
  
//   const plan = [
//     { dayId: 1, time: '08:00', content: '호텔 조식'},
//     { dayId: 1, time: '14:00', content: '에펠탑 방문'},
//     { dayId: 2, time: '08:00', content: '호텔 조식'},
//     { dayId: 2, time: '14:00', content: '루브르 박물관 방문'},
//     { dayId: 3, time: '08:00', content: '호텔 조식'},
//     { dayId: 3, time: '15:00', content: '노트르담 대성당 방문'}
//   ];
  
//   const data = await prisma.schedule.createMany({
//     data: planList,
//   });
  
//   return data;
// };

const tripService = {
  createTrip,
  updateCity,
  //saveAllPlan
}

export default tripService;
