import type { CustomEvents } from '@/types/customEvents/customEvents'
import type { DeleteCustomEventProps } from '@/types/customEvents/deleteCustomEvent'

export const deleteCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  handler
}: DeleteCustomEventProps<EventName>) => {
  document.removeEventListener(eventName, handler)
}
