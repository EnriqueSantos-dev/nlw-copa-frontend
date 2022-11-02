import api from '../config/axios';


async function getUsersCount() {
  try {
    const users = await api.get<{ count: number }>("/users/count")

    return users.data.count
  } catch (err) {
    console.error(err)
  }

}

export default getUsersCount