import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilidad para fusionar clases de manera segura.
 * Especialmente útil si se llegaran a usar clases de utilidad, o simplemente
 * para combinar módulos CSS y strings dinámicos de forma limpia.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
