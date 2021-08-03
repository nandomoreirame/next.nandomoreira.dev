import * as React from 'react';
import { BlockContent } from '@interfaces';
import styled from '@emotion/styled';
import SanityBlockContent from '@sanity/block-content-to-react';

export const BlockContenStyled = styled(SanityBlockContent)`
  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
  }
`;

type ContentProps = {
  content?: Array<BlockContent>;
};

export const Content: React.FC<ContentProps> = ({ content }: ContentProps) => {
  const serializers = {
    types: {
      // eslint-disable-next-line react/display-name
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <React.Fragment>
      {content && <BlockContenStyled blocks={content} serializers={serializers} />}
    </React.Fragment>
  );
};
