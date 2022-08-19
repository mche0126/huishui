/**
 * Generates 60 * 24 random numbers for datasets
 * This dataset will only include positive values
 * @returns
 * */
export const sampleData1 = (): number[] =>
  Array(60 * 24)
    .fill(100)
    .map((e) => Math.round(Math.random() * e))

/**
 * Generate 1 day time with an interval of 1 min
 * @returns {Array<string>} one day time with interval of 1 min
 */
export const oneDayTimeData = (): string[] => {
  const now = Date.now()
  const interval = 1000 * 60
  const totalMinutes = 60 * 24

  return Array(totalMinutes)
    .fill(now)
    .map((e, i) => now + i * interval)
    .map((e) => new Date(e).toISOString().substring(12, 19))
}
