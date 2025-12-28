/**
 * Converts an ISO date string (e.g., "2025-12-28T21:35:03.898820Z")
 * into a relative time string (e.g., "32 minutes ago").
 */
export const timeAgo = (dateInput: string | Date | null | undefined): string => {
  if (!dateInput) return 'Now';

  const date = new Date(dateInput);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (seconds < 5) {
    return 'Just now';
  }

  let counter: number;

  if (seconds >= intervals.year) {
    counter = Math.floor(seconds / intervals.year);
    return `${counter} year${counter === 1 ? '' : 's'} ago`;
  }

  if (seconds >= intervals.month) {
    counter = Math.floor(seconds / intervals.month);
    return `${counter} month${counter === 1 ? '' : 's'} ago`;
  }

  if (seconds >= intervals.week) {
    counter = Math.floor(seconds / intervals.week);
    return `${counter} week${counter === 1 ? '' : 's'} ago`;
  }

  if (seconds >= intervals.day) {
    counter = Math.floor(seconds / intervals.day);
    return `${counter} day${counter === 1 ? '' : 's'} ago`;
  }

  if (seconds >= intervals.hour) {
    counter = Math.floor(seconds / intervals.hour);
    return `${counter} hour${counter === 1 ? '' : 's'} ago`;
  }

  if (seconds >= intervals.minute) {
    counter = Math.floor(seconds / intervals.minute);
    return `${counter} minute${counter === 1 ? '' : 's'} ago`;
  }

  return `${Math.floor(seconds)} seconds ago`;
};