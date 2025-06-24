import axios from 'axios'
import useSWR from 'swr'

const fetcher = async () => {
  const { data } = await axios.get(`/api/rooms/get-all-rooms`)

  return data
}

export const useGetAllRooms = () => {
  const { data = [], ...rest } = useSWR(['useGetAllRooms'], fetcher)

  return {
    rooms: data,
    ...rest
  }
}
