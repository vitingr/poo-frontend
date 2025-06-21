import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialState

      const storedValue = localStorage.getItem(key)
      return storedValue !== null ? JSON.parse(storedValue) : initialState
    } catch (error) {
      console.error('Error reading localStorage key:', key, error)
      return initialState
    }
  })

  const setLocalStorageState = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setState(prev => {
        const valueToStore =
          newValue instanceof Function ? newValue(prev) : newValue

        try {
          localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
          console.error('Error setting localStorage key:', key, error)
        }

        return valueToStore
      })
    },
    [key]
  )

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setState(JSON.parse(event.newValue))
        } catch (error) {
          console.error('Error parsing localStorage key:', key, error)
        }
      }
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [key])

  return [state, setLocalStorageState] as const
}
