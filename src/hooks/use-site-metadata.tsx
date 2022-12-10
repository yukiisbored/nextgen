import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          image
          type
          siteUrl
        }
      }
    }
  `);

  return site.siteMetadata;
};

