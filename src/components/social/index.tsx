import { useColorMode } from '@chakra-ui/react';
import * as React from 'react';
import * as Styles from './styles';

export type SocialLinkProps = {
  readonly title: string;
  readonly link: string;
  readonly icon: React.ReactNode;
};

type SocialProps = {
  links: SocialLinkProps[];
};

export const Social: React.FC<SocialProps> = ({ links }: SocialProps) => {
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      {links && (
        <Styles.SocialNav light={colorMode === 'light'}>
          {links.map(({ link, title, icon }: SocialLinkProps) => (
            <Styles.SocialLink
              key={link}
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Styles.SocialLink>
          ))}
        </Styles.SocialNav>
      )}
    </React.Fragment>
  );
};
