import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  description?: string;
  title: string;
  path?: string;
  children?: React.ReactNode;
};

const Seo: React.FC<SeoProps> = ({ description, title, path }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              nickname
            }
            ogImage
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const canonical = path ? `${site.siteMetadata.siteUrl}${path}` : undefined;

  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      link={canonical ? [{ rel: 'canonical', href: canonical }] : []}
      meta={[
        {
          name: 'google-site-verification',
          content: 'TSyPZx5anjlBuvq5dTPE_oPzWege3gZVtBcB9euOVaU',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:author',
          content: site.siteMetadata.author.name,
        },
        {
          property: 'og:author',
          content: site.siteMetadata.author.nickname,
        },
        {
          property: 'og:image',
          content: site.siteMetadata.ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        ...(canonical
          ? [{ property: 'og:url', content: canonical }]
          : []),
      ]}
    />
  );
};

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string as React.Validator<string>,
  title: PropTypes.string.isRequired,
};

export default Seo;
