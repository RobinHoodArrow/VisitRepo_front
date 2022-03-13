import type { GetStaticProps, NextPage } from "next";
import { Hero } from "@components/Home/Hero";
import { About } from "@components/Home/About";
import { Layout } from "@components/Layout";
import { Contact } from "@components/Home/Contact";
import { Projects } from "@components/Home/Projects";
import {
	getMostStarredRepos,
	getPinnedRepos,
	IStarredRepo,
} from "@libs/graphql";
import { CONFIG } from "@libs/config";

export interface IIndexPage {
	repos: IStarredRepo[];
	pinned: IStarredRepo[];
}

const IndexPage: NextPage<IIndexPage> = ({ repos, pinned }) => {
	return (
		<Layout title="Home">
			<Hero />
			<About />
			<Projects repos={repos} pinned={pinned} />
			<Contact />
		</Layout>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IIndexPage> = async () => {
	const repos = await getMostStarredRepos();
	const pinned = await getPinnedRepos();

	return {
		props: {
			repos,
			pinned,
		},
		revalidate: CONFIG.REVALIDATION,
	};
};
