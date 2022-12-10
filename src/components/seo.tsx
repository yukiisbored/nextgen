import * as React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";
import favicon from "../images/favicon.png";

export default function SEO({
  title,
  description,
  image,
  type,
  pathname,
}: {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  pathname?: string;
}) {
  const {
    siteUrl,
    author,
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    type: defaultType,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    type: type || defaultType,
    url: `${siteUrl}${pathname || ""}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <link rel="icon" href={favicon} />
    </>
  );
}
