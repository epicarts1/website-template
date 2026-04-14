type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  return (inputs as unknown[])
    .flat(Infinity)
    .filter((x) => typeof x === 'string' && (x as string).length > 0)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
