// Utility: Merges Tailwind and custom class names
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Merge class names for cleaner styling
}
