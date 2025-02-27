import removeMd from "remove-markdown";


export function description(markdown: string) {
	return removeMd(markdown).replace(/\s+/g, " ").trim().slice(0, 150);
}
