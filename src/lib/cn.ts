// Tiny className joiner — filters out falsy values. Keeps JSX readable without a dep.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
