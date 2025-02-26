import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import invariant from "tiny-invariant";

export async function GET(context: APIContext) {
	const renderers = await loadRenderers([getMDXRenderer()]);
	const container = await AstroContainer.create({ renderers });
	const posts = (await getCollection("notes")).filter(
		(post) => !post.data.draft,
	);

	const items: RSSFeedItem[] = [];
	for (const post of posts) {
		const { Content } = await render(post);
		const content = await container.renderToString(Content);
		items.push({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			description: post.data.description,
			link: `/notes/${post.slug}/`,
			content,
		});
	}

	invariant(context.site, "site is required");
	return rss({
		title: "Yuki's Notes",
		description: "The writings of a computer hobbyist dork",
		site: context.site,
		items,
		stylesheet: "/rss/styles.xsl",
	});
}
