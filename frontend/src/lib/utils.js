
export function formatTime(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours % 12 || 12}:${minutes} ${hours > 11 ? "pm" : "am"}`;
}
