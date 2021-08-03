import WhatsAppUrl from 'whatsapp-url';
import { format, register } from 'timeago.js';
import { BlockContent } from 'types/portfolio';

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

export function timesAgoFormatter(date = ''): string {
  if (!date && date === '') return '';

  const locales: Array<[string, string]> = [
    ['agora mesmo', 'agora mesmo'],
    ['%s segundos atrás', 'em %s segundos'],
    ['1 minuto atrás', 'em 1 minuto'],
    ['%s minutos atrás', 'em %s minutos'],
    ['1 hora atrás', 'em 1 hora'],
    ['%s horas atrás', 'em %s horas'],
    ['1 dia atrás', 'em 1 dia'],
    ['%s dias atrás', 'em %s dias'],
    ['1 semana atrás', 'em 1 semana'],
    ['%s semanas atrás', 'em %s semanas'],
    ['1 mês atrás', 'em 1 mês'],
    ['%s meses atrás', 'em %s meses'],
    ['1 ano atrás', 'em 1 ano'],
    ['%s anos atrás', 'em %s anos'],
  ];

  register('pt_BR', (number: number, index: number) => locales[index]);
  return format(date, 'pt_BR');
}
