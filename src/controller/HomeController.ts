
// /**
//  *
//  * @routes GET /api/home
//  * @desc 홈 화면 조회
//  * @access public
//  */
//  const getHome = async (req: Request, res: Response) => {
//     const { tripId } = req.params;
    
//     const data = await HomeService.getSeries(seriesId);
    
//     if (!data) {
//         return res.status(404).json({status: 404, message: "NOT_FOUND"});
//     }
//     return res.status(200).json({status: 200, message: "회차 정보 조회 성공", data});
// };
  
// export default {
//     getHome
// };