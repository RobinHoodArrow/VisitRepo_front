import type { NextPage } from "next";
import { AppsCard } from "@components/Apps/AppsCard";
import { useLocaleParser } from "@libs/localeParser";
import { Link } from "@components/Utils/Link";
import { Layout } from "@components/Layout";
import { FiBox, FiX } from "react-icons/fi";
import { FaBomb } from "react-icons/fa";

const AppsPage: NextPage = () => {
	const parser = useLocaleParser();

	const apps = [
		{
			name: parser.get("minesweeper") as string,
			description: parser.get("minesweeper_description") as string,
			icon: FaBomb,
			href: "/apps/minesweeper",
			color: "text-black",
		},
		{
			name: parser.get("tetris") as string,
			description: parser.get("tetris_description") as string,
			icon: FiBox,
			href: "/apps/tetris",
			color: "text-blue-500",
		},
		{
			name: parser.get("tic_tac_toe") as string,
			description: parser.get("tic_tac_toe_description") as string,
			icon: FiX,
			href: "/apps/tictactoe",
			color: "text-red-500",
		},
	];

	return (
		<Layout title={parser.get("apps") as string}>
			<section className="min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-black dark:text-white text-center">
				<h1
					className="text-4xl mb-10 font-semibold font-heading"
					dangerouslySetInnerHTML={{
						__html: parser.get("all_apps") as string,
					}}
				/>
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
						{apps.map((app, idx) => (
							<AppsCard
								key={idx}
								icon={app.icon}
								name={app.name}
								value={app.description}
								href={app.href}
								color={app.color}
							/>
						))}
					</div>
					<div className="pt-10">
						<Link href="/">
							<span className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold round transition duration-200">
								{parser.get("go_home")}
							</span>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AppsPage;