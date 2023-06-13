export default function countdown(dueDate) {
  const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  const today = new Date();
  const due = new Date(dueDate);
  const remaining = Math.round((due.getTime() - today.getTime()) / msPerDay);
  if (remaining === 1) return "1 day";
  if (remaining > 1) return `${remaining} days`;
  return "Last day";
}
