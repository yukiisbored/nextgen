import * as React from "react";
import { Link, graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const NotesPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="text-right text-sm md:text-xs">
          <Link to="/">HOME</Link>
        </div>
        <header className="text-center">
          <h1 className="font-bold text-yuki text-7xl">Yuki's Notes</h1>
          <p className="text-xl text-yuki-dark font-medium mt-4">
            The writings of a computer hobbyist dork
          </p>
        </header>
        <section className="mt-4">
          {data.allMdx.group
            .sort((a, b) => b.fieldValue - a.fieldValue)
            .map((group) => (
              <div key={group.fieldValue} className="mt-1">
                <h2 className="font-bold text-yuki text-4xl">
                  {group.fieldValue}
                </h2>
                <ul className="mt-4">
                  {group.nodes.map((node) => (
                    <li key={node.id} className="mt-1">
                      <div className="w-[10.25ch] inline-block">
                        {node.frontmatter.date}
                      </div>
                      <div className="inline-block">
                        <Link to={node.frontmatter.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </div>
                      <div className="ml-[10.25ch] mt-2 mb-2">
                        <p>{node.frontmatter.description || node.excerpt}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NotesIndex {
    allMdx(
      sort: [{ frontmatter: { date: DESC } }]
      filter: { frontmatter: { slug: { ne: null } } }
    ) {
      group(field: { fields: { year: SELECT } }) {
        nodes {
          frontmatter {
            date
            description
            slug
            title
          }
          excerpt
          id
        }
        fieldValue
      }
    }
  }
`;

export default NotesPage;

export const Head: HeadFC = () => (
  <Seo
    title="Notes"
    description="The writings of a computer hobbyist dork"
    pathname="/notes"
  />
);
