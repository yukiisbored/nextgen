import * as React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost: React.FC<PageProps> = ({ data, children }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <header>
          <div className="text-right text-sm md:text-xs">
            <Link to="/notes">INDEX</Link>
            {" | "}
            <Link to="/">HOME</Link>
          </div>
          <div className="text-center mt-10">
            <h1 className="font-bold text-yuki text-3xl md:text-6xl">
              {data.mdx.frontmatter.title}
            </h1>
            <p className="text-xl text-yuki-dark font-medium mt-4">
              Published on {data.mdx.frontmatter.date}
            </p>
          </div>
        </header>
        {data.mdx.tableOfContents &&
        Object.keys(data.mdx.tableOfContents).length > 0 ? (
          <section className="mt-4">
            <h2 className="font-bold text-2xl md:text-3xl text-yuki">
              Table of Contents
            </h2>
            <ul className="list-decimal pl-10 mt-2">
              {data.mdx.tableOfContents.items.map((item) => (
                <li key={item.url}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <article className="prose-yuki mt-4">{children}</article>
        <footer className="mt-4">
          <Link to="/notes">← Return to notes</Link>
        </footer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NotesPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        slug
      }
      tableOfContents(maxDepth: 1)
      excerpt
    }
  }
`;

export const Head: HeadFC = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description || data.mdx.excerpt}
    type="article"
    pathname={`/notes/${data.mdx.frontmatter.slug}`}
  />
);

export default BlogPost;
