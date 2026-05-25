import removeMd from "remove-markdown";

const MAX_CHARS = 200;

export function description(markdown: string) {
	const preprocessed = markdown
		.replace(/^\s*\[[^\]]+\]:\s+\S.*$/gm, "")
		.replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1")
		.replace(/\[([^\]]+)\](?!\()/g, "$1");

	const text = removeMd(preprocessed).replace(/\s+/g, " ").trim();

	if (text.length <= MAX_CHARS) return text;

	const window = text.slice(0, MAX_CHARS + 1);
	const sentenceEnd = Math.max(
		window.lastIndexOf(". "),
		window.lastIndexOf("! "),
		window.lastIndexOf("? "),
	);
	if (sentenceEnd >= MAX_CHARS * 0.6) {
		return text.slice(0, sentenceEnd + 1).trim();
	}
	const cut = window.slice(0, MAX_CHARS);
	const lastSpace = cut.lastIndexOf(" ");
	return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}
