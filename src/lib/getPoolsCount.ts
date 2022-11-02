import api from '../config/axios';


async function getPoolsCount() {
  try {
    const pools = await api.get<{ count: number }>("/pools/count")

    return pools.data.count
  } catch (err) {
    console.error(err)
  }

}

export default getPoolsCount