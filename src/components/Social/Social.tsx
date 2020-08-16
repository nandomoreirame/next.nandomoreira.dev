import React, { memo, Fragment } from 'react';
import * as S from './Social.styles';
import { SocialLink } from '@nandomoreira/@types';

type SocialProps = {
  socialLinks: SocialLink[];
};

const Social: React.FC<SocialProps> = ({ socialLinks }: SocialProps) => (
  <Fragment>
    {socialLinks && (
      <S.SocialNav>
        {socialLinks.map(({ link, title, icon }: SocialLink) => (
          <S.SocialLink
            key={link}
            href={link}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </S.SocialLink>
        ))}
      </S.SocialNav>
    )}
  </Fragment>
);

export default memo(Social);
