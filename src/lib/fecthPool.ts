import api from '../config/axios'

async function fetchPool<Response>(data: any): Promise<Response> {
  const response = await api.post("http://localhost:3333/pools", { 
    ...data,
  });

  return await response.data;
}

export default fetchPool