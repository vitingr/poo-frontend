export const ROOMS_DATA = [
  ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(
    (floorLetter, floorIndex) =>
      Array.from({ length: 8 }, (_, i) => {
        const number = String(i + 1).padStart(3, '0')
        const types = ['standard', 'premium', 'luxury']
        const type = types[i % types.length]
        const floorNames = [
          'first',
          'second',
          'third',
          'fourth',
          'fifth',
          'sixth',
          'seventh',
          'eighth',
          'ninth',
          'tenth'
        ]
        const floorName = floorNames[floorIndex]

        const descriptions = {
          standard: `A cozy standard room on the ${floorName} floor.`,
          premium: `A comfortable premium room on the ${floorName} floor.`,
          luxury: `A spacious luxury suite on the ${floorName} floor.`
        }

        return {
          image:
            'https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg',
          hotel_code: `${floorLetter}${number}`,
          has_wifi: true,
          has_tv: true,
          type,
          description: descriptions[type]
        }
      })
  )
]
