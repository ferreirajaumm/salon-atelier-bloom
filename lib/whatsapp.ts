// Contacto de marcações via WhatsApp — fonte única para todos os botões "Marcar Horário".
export const WHATSAPP_NUMBER = '351925515466';

const WHATSAPP_MESSAGE =
  'Olá TÔDCACHOS! Gostaria de marcar um horário e receber mais informações sobre os serviços. 💚';

// Link direto que abre o WhatsApp com a mensagem já preenchida.
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
