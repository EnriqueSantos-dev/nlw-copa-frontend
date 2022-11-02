import api from '../config/axios';


async function getGuessesCount() {
  try {
    const guesses = await api.get<{ count: number }>("/guesses/count")

    return guesses.data.count
  } catch (err) {
    console.error(err)
  }

}

export default getGuessesCount