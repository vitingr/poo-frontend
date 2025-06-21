export interface CustomEvents {
  toaster: {
    action: 'open' | 'close'
    data: {
      message: string
    }
  }
}
