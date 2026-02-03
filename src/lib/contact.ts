export const PRIMARY_PHONE_LOCAL = "0727953604";
export const SECONDARY_PHONE_LOCAL = "0734672200";
export const OWNER_EMAIL = "otienowilliam57@gmail.com";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hello, I need help with HVAC, cold room, or motor services.";

const toInternationalPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("254")) return digits;
  if (digits.startsWith("0")) return `254${digits.slice(1)}`;
  if (digits.length === 9) return `254${digits}`;

  return digits;
};

export const PRIMARY_WHATSAPP_NUMBER = toInternationalPhone(PRIMARY_PHONE_LOCAL);

export const openPhoneCall = (phone: string) => {
  window.location.href = `tel:${phone}`;
};

export const openWhatsAppChat = (message = DEFAULT_WHATSAPP_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);
  const waMeUrl = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  const fallbackUrl = `https://api.whatsapp.com/send?phone=${PRIMARY_WHATSAPP_NUMBER}&text=${encodedMessage}`;

  const popup = window.open(waMeUrl, "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = fallbackUrl;
  }
};

export const openEmailDraft = (subject: string, body: string) => {
  const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
};
