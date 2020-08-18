import React, { Fragment } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { SEO } from '@nandomoreira/@types';

const seo: SEO = (process?.env?.SEO as SEO) || {};
const defaultTitle = seo?.title;
const defaultDescription = seo?.description;
const defaultOgImage = seo?.image || `${process?.env?.BASE_URL}/share.png`;
const defaultFavicon = seo?.favicon || `${process?.env?.BASE_URL}/icon.svg`;

type Props = SEO & {
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
const SiteHead: React.FC<Props> = ({
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

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${process?.env?.BASE_URL}/favicons/icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${process?.env?.BASE_URL}/favicons/icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${process?.env?.BASE_URL}/favicons/icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${process?.env?.BASE_URL}/favicons/icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${process?.env?.BASE_URL}/favicons/icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${process?.env?.BASE_URL}/favicons/icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${process?.env?.BASE_URL}/favicons/icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${process?.env?.BASE_URL}/favicons/icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process?.env?.BASE_URL}/favicons/icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${process?.env?.BASE_URL}/favicons/icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process?.env?.BASE_URL}/favicons/icon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${process?.env?.BASE_URL}/favicons/icon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process?.env?.BASE_URL}/favicons/icon-16x16.png`}
      />
      <link rel="manifest" href="/manifest.json" />

      <meta
        name="msapplication-TileImage"
        content={`${process?.env?.BASE_URL}/favicons/ms-icon-144x144.png`}
      />

      {themeColor && <meta name="msapplication-TileColor" content={themeColor} />}
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
