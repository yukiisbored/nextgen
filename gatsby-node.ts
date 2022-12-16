import type { GatsbyNode } from "gatsby";
import { marked } from "marked";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const date = new Date(node.frontmatter.date);
    const year = date.getFullYear();
    createNodeField({ node, name: "year", value: year });

    const html = marked.parse(node.body);
    createNodeField({ node, name: "html", value: html });
  }
};
