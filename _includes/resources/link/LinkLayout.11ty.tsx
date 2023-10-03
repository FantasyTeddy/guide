import h, { JSX } from "vhtml";
import { Link, LinkFrontmatter } from "./LinkModels";
import { Author } from "../author/AuthorModels";
import VideoPlayer from "../../video/VideoPlayer.11ty";
import { LayoutContext, LayoutProps } from "../../../src/models";
import { Topic } from "../topic/TopicModels";
import { BaseLayout } from "../../layouts/BaseLayout.11ty";
import ArticleTitleSubtitle from "../common/ArticleTitleSubtitle.11ty";
import ArticleAuthor from "../common/ArticleAuthor.11ty";
import ArticleTopics from "../common/ArticleTopics.11ty";

export type LinkLayoutData = LayoutProps & LinkFrontmatter;

export function LinkLayout(
	this: LayoutContext,
	data: LinkLayoutData
): JSX.Element {
	const { collections, content, page } = data;
	const link = collections.resourceMap.get(page.url) as Link;
	if (!link) {
		throw new Error(`Link "${page.url}" not in collection`);
	}
	// Unpack references and make it not undefined
	if (!link.references) {
		throw new Error(`Link ${link.url} has no references.`);
	}
	const author = link.references.author as Author;
	if (!author) {
		throw new Error(`Author "${link.author}" not in collection`);
	}
	const topics = link.references.topics
		? (link.references.topics as Topic[])
		: [];

	// Main content
	const main = (
		<div class="section">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column">
						<main class="content">
							<ArticleTitleSubtitle
								title={link.title}
								subtitle={link.subtitle}
							/>
							<ArticleAuthor author={author} displayDate={link.displayDate} />
							<ArticleTopics topics={topics} />

							<p>
								<a href={link.linkURL} class="link-external">
									View at original site
								</a>
								{(link.screenshot || link.video || content) && <hr />}
							</p>

							{link.screenshot && (
								<img
									src={link.screenshot}
									alt="Link Screenshot"
									style="object-fit: contain; object-position: top"
								/>
							)}
							{link.video && <VideoPlayer source={link.video} />}

							{content && (
								<div class="columns mt-2">
									<div
										class="column is-11-desktop content"
										dangerouslySetInnerHTML={{ __html: content }}
									/>
								</div>
							)}
						</main>
					</div>
				</div>
			</div>
		</div>
	);

	return <BaseLayout {...data}>{main}</BaseLayout>;
}

export const render = LinkLayout;
