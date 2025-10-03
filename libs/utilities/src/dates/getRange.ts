export function getRange(start: Date, end: Date): string[] {
  const result: string[] = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    result.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1); // Increment by one day
  }

  return result;
}
