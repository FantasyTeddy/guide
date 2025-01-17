import { expect, test } from "vitest";
import { screen } from "@testing-library/dom";

import Pagination from "./Pagination.11ty";
import fixtures from "../fixtures";
import { renderToString } from "jsx-async-runtime";

test("Pagination", async () => {
	const r = Pagination(fixtures.paginationProps);
	document.body.innerHTML = await renderToString(r, {});
	expect(screen.getByRole("navigation")).to.exist;
	expect(screen.getByLabelText("Goto page 0")).to.exist;
	const previous: HTMLAnchorElement = screen.getByText("Previous");
	expect(previous.href).to.equal("tip3");
	const next: HTMLAnchorElement = screen.getByText("Next");
	expect(next.href).to.equal("tip5");
	const first: HTMLAnchorElement = screen.getByLabelText("Goto page 1");
	expect(first.href).to.equal("/tips/some-tip/");
});
