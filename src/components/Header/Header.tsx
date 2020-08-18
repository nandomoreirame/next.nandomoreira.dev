import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@nandomoreira/components';

import * as S from './Header.styles';

const Header: React.SFC = () => {
  const { asPath } = useRouter();

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo>
          <Logo href="/" />
        </S.Logo>
        <S.Nav>
          <NextLink href="/sobre" as="/sobre" passHref>
            <S.NavLink className={asPath === '/sobre' ? '--active' : ''}>Sobre</S.NavLink>
          </NextLink>
          <NextLink href="/portfolio" as="/portfolio" passHref>
            <S.NavLink className={asPath === '/portfolio' ? '--active' : ''}>Portfolio</S.NavLink>
          </NextLink>
          <NextLink href="/contato" as="/contato" passHref>
            <S.NavLink className={asPath === '/contato' ? '--active' : ''}>Contato</S.NavLink>
          </NextLink>
          <NextLink href="/cv" as="/cv" passHref>
            <S.NavLink className={asPath === '/cv' ? '--active' : ''}>Resume</S.NavLink>
          </NextLink>
          <S.NavLink href="https://blog.nandomoreira.dev" target="_blank" rel="noopener noreferrer">
            Blog
          </S.NavLink>
        </S.Nav>
      </S.HeaderInner>
    </S.Header>
  );
};

export default React.memo(Header);
