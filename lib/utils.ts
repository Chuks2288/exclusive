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