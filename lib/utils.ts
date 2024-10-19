import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertAmountFromiliunits(amount: number) {
  return amount / 1000;
}
export function convertAmountToMiliunits(amount: number) {
  return Math.round(amount * 100);
}

export const formatValue = (value: number): string => {
  if (value >= 1_000_000_000) {
    return Math.floor(value / 1_000_000_000) + 'B';
  } else if (value >= 1_000_000) {
    return Math.floor(value / 1_000_000) + 'M';
  } else if (value >= 1_000) {
    return Math.floor(value / 1_000) + 'K';
  }
  return value.toString();
};


export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long', // 'short' for abbreviated month (e.g., "Aug")
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short', // Optional
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
