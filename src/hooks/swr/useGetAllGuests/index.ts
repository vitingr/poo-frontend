import axios from 'axios'
import useSWR from 'swr'

const fetcher = async () => {
  const { data } = await axios.get(`/api/guests/get-all-guests`)
  console.log(data)

  return data
}

export const useGetAllGuests = () => {
  const { data = [], ...rest } = useSWR(['useGetAllGuests'], fetcher)

  return {
    guests: data,
    ...rest
  }
}
