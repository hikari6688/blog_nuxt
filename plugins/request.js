import http from './http';
// export const getEssayList= async ()=>{
//   return await http.post('/api/essay/getEssayList', params).then(res => res.data)
// }
export const getEssayList= params => http.post('/api/essay/getEssayList', params).then(res => res.data);
export const getEssayById= params => http.post('/api/essay/getDetail', params).then(res => res.data);
