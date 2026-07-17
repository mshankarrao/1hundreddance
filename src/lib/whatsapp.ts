const WHATSAPP_PHONE = "918463998396";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP = {
  booking: whatsappLink(
    "Hi 1 HUNDRED Dance! I’d like to book a class.",
  ),
  visit: whatsappLink(
    "Hi 1 HUNDRED Dance! I’d like to visit the studio.",
  ),
  general: whatsappLink(
    "Hi 1 HUNDRED Dance! I’d like to know more about your classes.",
  ),
  contact: whatsappLink(
    "Hi 1 HUNDRED Dance! I have a query.",
  ),
};
