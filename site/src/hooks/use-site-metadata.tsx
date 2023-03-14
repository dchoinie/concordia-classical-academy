import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address
          description
          email
          image
          phone
          siteUrl
          title
          keywords
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
