import WhatsAppUrl from 'whatsapp-url';

export const whatsappLink = (
  phone = 5541984401163,
  text = 'Oi Nando! Eu vi o seu site, e gostaria de conversar.',
) => WhatsAppUrl({ phone, text });
