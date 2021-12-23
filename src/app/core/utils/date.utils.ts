export function getStartDate(date: Date): number {
  return (new Date(date)).setHours(0, 0, 0, 0);
}

export function getEndDate(date: Date | number): number {
  return (new Date(date)).setHours(23, 59, 59, 59);
}

export function getMinDate(...date: Array<Date | null>): null | Date {
  const min: number | null = Math.min(...date.filter(Boolean).map(date => date.getTime()));
  return min === Infinity ? null : new Date(min);
}

export function getMaxDate(...date: Array<Date | null>): null | Date {
  const max: number | null = Math.max(...date.filter(Boolean).map(date => date.getTime()));
  return max === -Infinity ? null : new Date(max);
}
