import type { CustomEvents } from '@/types/customEvents/customEvents'
import type { TriggerCustomEventProps } from '@/types/customEvents/triggerCustomEvent'

export const triggerCustomEvent = <EventName extends keyof CustomEvents>({
  eventName,
  data
}: TriggerCustomEventProps<EventName>) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}
