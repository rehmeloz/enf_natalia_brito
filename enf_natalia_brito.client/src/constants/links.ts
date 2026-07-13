export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
export const WHATSAPP_DISPLAY = import.meta.env.VITE_WHATSAPP_DISPLAY;
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais!";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const INSTAGRAM_HANDLE = import.meta.env.VITE_INSTAGRAM_HANDLE;
export const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;