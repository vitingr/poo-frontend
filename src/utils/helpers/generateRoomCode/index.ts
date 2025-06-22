type RoomType = 'SINGLE' | 'DOUBLE' | 'SUITE' | 'DELUXE'

export const generateRoomCode = ({
  floor,
  roomType
}: {
  floor: number
  roomType: RoomType
}): string => {
  const floorLetter = String.fromCharCode(65 + floor - 1)

  const baseNumber = '0001'

  const randomNum = Math.floor(1000 + Math.random() * 9000)

  const roomTypeLetter = roomType.charAt(0).toUpperCase()

  return `${floorLetter}${baseNumber}${randomNum}${roomTypeLetter}`
}
