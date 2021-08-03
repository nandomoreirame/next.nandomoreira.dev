import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { whatsappLink } from '@util';
import { AboutCard } from './about-card';

export const More: React.FC = () => (
  <AboutCard title="Quer mais?">
    <Text mb={4}>
      Se você quiser atualizações aleatórias e regulares sobre o que eu ando fazendo da vida, você
      pode...
    </Text>
    <ul>
      <li>
        ... me seguir no Twitter em{' '}
        <a href="https://twitter.com/oseunando" rel="noopener noreferrer" target="_blank">
          @oseunando
        </a>
      </li>
      <li>
        Ou seguir no Instagram em{' '}
        <a href="https://instagram.com/oseunando" rel="noopener noreferrer" target="_blank">
          @oseunando
        </a>
        .
      </li>
    </ul>
    <Text mb={4}>Mas... Se peferir um contato mais direto pode me chamar no...</Text>
    <ul>
      <li>
        ...{' '}
        <a href="https://t.me/oseunando" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>{' '}
        ou no{' '}
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </li>
      <li>
        Ou se preferir pode enviar um email para{' '}
        <a href="mailto:hi@nandomoreira.dev" target="_blank" rel="noopener noreferrer">
          hi@nandomoreira.dev
        </a>{' '}
        que é sucesso!
      </li>
    </ul>
  </AboutCard>
);
