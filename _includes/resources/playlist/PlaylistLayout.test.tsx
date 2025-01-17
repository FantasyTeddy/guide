import { expect, test } from "vitest";

import { PlaylistLayout, PlaylistLayoutData } from "./PlaylistLayout.11ty";
import fixtures, { baseRenderData } from "../../fixtures";
import { screen } from "@testing-library/dom";
import { renderToString } from "jsx-async-runtime";

test("should render PlaylistLayout", async () => {
	const playlist0 = fixtures.playlistItems[0];
	const renderProps: PlaylistLayoutData = {
		...baseRenderData,
		...playlist0.data,
		page: playlist0.page,
		content: fixtures.content,
		commandLineArgs: { pathprefix: "/pycharm/guide" },
	};
	const r = PlaylistLayout.call(fixtures.context, renderProps);
	document.body.innerHTML = await renderToString(r, {});
	const playlistItems = screen.getAllByRole("link", { name: "Playlist Item" });
	expect(playlistItems.length).to.equal(1);
});
