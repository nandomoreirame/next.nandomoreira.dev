import { BlockContent } from 'types/portfolio';
import WhatsAppUrl from 'whatsapp-url';

export const whatsappLink = (
  phone = 5541984401163,
  text = 'Oi Nando! Eu vi o seu site, e gostaria de conversar.',
) => WhatsAppUrl({ phone, text });

export const contentToPlainText = (blocks: Array<BlockContent> = []): string =>
  blocks
    .map((block: BlockContent) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map(child => child?.text).join('');
    })
    .join('\n\n');
