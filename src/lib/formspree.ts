export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export function isFormspreeConfigured(): boolean {
  return FORMSPREE_ENDPOINT.startsWith("https://formspree.io/");
}
