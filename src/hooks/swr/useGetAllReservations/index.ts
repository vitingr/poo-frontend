import axios from 'axios'
import useSWR from 'swr'

const fetcher = async () => {
  const { data } = await axios.get(`/api/reservations/get-all-reservations`)

  return data
}

export const useGetAllReservations = () => {
  const { data = [], ...rest } = useSWR(['useGetAllReservations'], fetcher)

  return {
    reservations: data,
    ...rest
  }
}
