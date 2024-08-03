import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function converAmountToMilliUnits(amount: number) {
  return Math.round(amount * 1000);
}

export function converAmountFromMilliUnits(amount: number) {
  return amount / 1000;
}
