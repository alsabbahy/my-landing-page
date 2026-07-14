import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_ORIGIN = 'https://ahmed.alsabbahy.com';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({
    children,
    title,
    description,
    ogImageUrl,
    twitterCardType,
    twitterTitle,
    twitterSite,
    twitterCreator,
    twitterDomain,
    twitterUrl,
    twitterDescription,
    twitterImageUrl,
  }) => {
    const {asPath: pathname} = useRouter();
    const canonicalUrl = `${SITE_ORIGIN}${pathname === '/' ? '' : pathname}`;
    const ogImage = ogImageUrl ?? twitterImageUrl;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />

          <link href={canonicalUrl} key="canonical" rel="canonical" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={canonicalUrl} property="og:url" />
          <meta content="website" property="og:type" />
          {ogImage ? <meta content={ogImage} property="og:image" /> : null}

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          {twitterCardType ? <meta content={twitterCardType} name="twitter:card" /> : null}
          <meta content={twitterTitle ?? title} name="twitter:title" />
          <meta content={twitterDescription ?? description} name="twitter:description" />
          {twitterUrl ? <meta content={twitterUrl} name="twitter:url" /> : null}
          {twitterSite ? <meta content={twitterSite} name="twitter:site" /> : null}
          {twitterCreator ? <meta content={twitterCreator} name="twitter:creator" /> : null}
          {twitterDomain ? <meta content={twitterDomain} name="twitter:domain" /> : null}
          {twitterImageUrl ?? ogImage ? <meta content={twitterImageUrl ?? ogImage} name="twitter:image" /> : null}
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
