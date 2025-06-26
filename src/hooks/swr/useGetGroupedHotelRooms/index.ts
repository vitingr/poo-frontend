import axios from 'axios'
import useSWR from 'swr'

const fetcher = async () => {
  const { data } = await axios.get(`/api/rooms/get-grouped-rooms`)

  return data
}

export const useGetGroupedHotelRooms = () => {
  const { data = [], ...rest } = useSWR(['useGetGroupedHotelRooms'], fetcher)

  return {
    rooms: data,
    ...rest
  }
}
