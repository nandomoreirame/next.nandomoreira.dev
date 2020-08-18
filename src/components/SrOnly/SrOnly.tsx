import React from 'react';

import * as S from './SrOnly.styles';

type SrOnlyProps = {
  children: React.ReactNode;
  focusable?: boolean;
};

const SrOnly: React.SFC<SrOnlyProps> = ({ children, focusable = false, ...props }: SrOnlyProps) => (
  <S.Tag className={focusable ? `--focusable` : ''} {...props}>
    {children}
  </S.Tag>
);

export default SrOnly;
