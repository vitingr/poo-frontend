export interface GuestsChartParams {
  guestsActual: number[]
  guestsExpected: number[]
  labels: {
    expected: string
    actual: string
  }
}
