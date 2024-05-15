export const formatDate = (input: string) => {
  const now = new Date();
  const date = new Date(input)

  const diff = Math.abs(now - date) / 1000; // Difference in seconds

  const intervals = {
    year: diff / (60 * 60 * 24 * 30 * 12),
    month: diff / (60 * 60 * 24 * 30),
    week: diff / (60 * 60 * 24 * 7),
    day: diff / (60 * 60 * 24),
    hour: diff / (60 * 60),
    minute: diff / 60,
    second: diff
  };

  if (intervals.year >= 1) {
    return Math.floor(intervals.year) + (Math.floor(intervals.year) === 1 ? ' year ago' : ' years ago');
  } else if (intervals.month >= 1) {
    return Math.floor(intervals.month) + (Math.floor(intervals.month) === 1 ? ' month ago' : ' months ago');
  } else if (intervals.week >= 1) {
    return Math.floor(intervals.week) + (Math.floor(intervals.week) === 1 ? ' week ago' : ' weeks ago');
  } else if (intervals.day >= 1) {
    return Math.floor(intervals.day) + (Math.floor(intervals.day) === 1 ? ' day ago' : ' days ago');
  } else if (intervals.hour >= 1) {
    return Math.floor(intervals.hour) + (Math.floor(intervals.hour) === 1 ? ' hour ago' : ' hours ago');
  } else if (intervals.minute >= 1) {
    return Math.floor(intervals.minute) + (Math.floor(intervals.minute) === 1 ? ' minute ago' : ' minutes ago');
  } else {
    return Math.floor(intervals.second) + (Math.floor(intervals.second) === 1 ? ' second ago' : ' seconds ago');
  }
}

export const date_string = (input: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(input).toLocaleDateString(undefined, options);
} 
