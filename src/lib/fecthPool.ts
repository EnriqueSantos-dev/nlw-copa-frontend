import api from '../config/axios'

async function fetchPool<Response>(data: any): Promise<Response> {
  const response = await api.post("/pools", { 
    ...data,
  });

  return await response.data;
}

export default fetchPool