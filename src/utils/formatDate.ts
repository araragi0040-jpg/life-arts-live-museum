export function formatDate(dateString: string): string {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-").map(Number);

  if (!year || !month || !day) {
    return dateString;
  }

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  // タイムゾーンずれを避けるため、UTCの正午として扱う
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const weekday = weekdays[date.getUTCDay()];

  return `${year}年${month}月${day}日（${weekday}）`;
}
