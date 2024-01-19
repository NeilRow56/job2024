import { type ClassValue, clsx } from 'clsx'
import { formatDistanceToNowStrict } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount)
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true })
}
