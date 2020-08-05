import React, { Fragment } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { SEOType } from '@nandomoreira/@types';

const seo: SEOType = (process?.env?.SEO as SEOType) || {};
const defaultTitle = seo?.title;
const defaultDescription = seo?.description;
const defaultOgImage = seo?.image || `${process?.env?.BASE_URL}/images/share.png`;
const defaultFavicon = seo?.favicon || `${process?.env?.BASE_URL}/images/icon.svg`;

type Props = SEOType & {
  children?: React.ReactElement;
  socialTags?: boolean;
};

/**
 * Custom Head component
 *
 * https://github.com/zeit/next.js#populating-head
 *
 * @param title
 * @param description
 * @param ogImage
 * @param url
 * @param favicon
 * @param lang
 * @constructor
 */
const SiteHead: React.FunctionComponent<Props> = ({
  title,
  description = defaultDescription,
  ogImage = defaultOgImage,
  url,
  favicon = defaultFavicon,
  themeColor,
  children,
  socialTags = true,
}: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
      <link rel="shortcut icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="manifest" href="/manifest.json" />

      {themeColor && <meta name="theme-color" content={themeColor} />}

      {socialTags && (
        <Fragment>
          <meta property="og:url" content={url ? url : `${process?.env?.BASE_URL}${asPath}`} />
          <meta property="og:title" content={title ? `${title} - ${defaultTitle}` : defaultTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:site" content={url ? url : `${process?.env?.BASE_URL}${asPath}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImage} />
        </Fragment>
      )}

      <link rel="index" href={`${process?.env?.BASE_URL}/`} />

      <link rel="dns-prefetch" href={`${process?.env?.BASE_URL}/`} />
      <link rel="preconnect" href={`${process?.env?.BASE_URL}/`} />
      <link rel="prefetch" href={`${process?.env?.BASE_URL}/`} />
      <link rel="prerender" href={`${process?.env?.BASE_URL}/`} />

      <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
      <link rel="preconnect" href="//fonts.googleapis.com/" crossOrigin="true" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com/" />
      <link rel="preconnect" href="//fonts.gstatic.com/" crossOrigin="true" />

      <link rel="dns-prefetch" href="//cdn.polyfill.io/" />
      <link rel="preconnect" href="//cdn.polyfill.io/" />
      <link rel="prefetch" href="//cdn.polyfill.io/" />

      <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&family=Roboto:wght@300;500;700&display=swap"
        rel="stylesheet"
      />

      {children}
    </NextHead>
  );
};

export default SiteHead;
