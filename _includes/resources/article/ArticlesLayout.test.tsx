import { expect, test } from "vitest";
import ArticlesLayout from "./ArticlesLayout.11ty";
import { screen } from "@testing-library/dom";
import fixtures, { baseRenderData } from "../../fixtures";
import { ReferenceLayoutProps } from "../../layouts/ReferenceLayout.11y";
import { renderToString } from "jsx-async-runtime";

test("should render ArticlesLayout", async () => {
	const renderProps: ReferenceLayoutProps = {
		...baseRenderData,
		title: "These Articles",
		resourceType: "articles" as any,
		listing: <div></div>,
		page: {
			fileSlug: "slug",
			url: "url",
			date: fixtures.date,
		},
		pagination: fixtures.paginationProps.pagination,
	};
	const firstArticleURL = fixtures.articles[0].url;
	fixtures.context.getResource = () =>
		fixtures.resourceMap.get(firstArticleURL)!;
	const articlesLayout = new ArticlesLayout();
	const r = articlesLayout.render.call(fixtures.context, renderProps);
	document.body.innerHTML = await renderToString(r, {});
	const links: HTMLAnchorElement[] = screen.getAllByRole("link", {
		name: fixtures.articles[0].title,
	});
	expect(links[0].href).to.equal("/articles/some-article/");
});
