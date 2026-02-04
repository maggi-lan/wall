
export function formatTime(isoString) {
  if (typeof isoString !== "string") return "";

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const period = hours >= 12 ? "pm" : "am";
  const hour12 = hours % 12 || 12;

  return `${hour12}:${minutes} ${period} • ${day}, ${month} ${dayOfMonth}, ${year}`;
}
