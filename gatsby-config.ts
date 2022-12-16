import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "yukiisbo.red",
    author: "Yuki Langley",
    description: "The personal website of a computer hobbyist dork",
    type: "website",
    image: "/profile.png",
    siteUrl: "https://yukiisbo.red",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              showCaptions: true,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
            },
          },
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/notes`,
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return {
                  ...node.frontmatter,
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/notes/${node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/notes/${node.frontmatter.slug}`,
                  custom_elements: [{ "content:encoded": node.fields.html }],
                };
              });
            },
            query: `
              {
                allMdx(
                  sort: [{ frontmatter: { date: DESC } }]
                  filter: { frontmatter: { slug: { ne: null } }}
                ) {
                  nodes {
                    fields {
                      html
                    }
                    excerpt
                    frontmatter {
                      title
                      date
                      slug
                      description
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "yukiisbo.red RSS Feed",
          },
        ],
      },
    },
  ],
};

export default config;
