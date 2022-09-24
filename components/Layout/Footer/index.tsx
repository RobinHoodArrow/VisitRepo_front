import type { FC } from "react";
import { FiHeart } from "react-icons/fi";
import { CONFIG } from "@libs/config";
import Link from "next/link";

export const Footer: FC = () => (
	<div className="bg-white dark:bg-gray-900">
		<div className="m-auto flex max-w-6xl flex-col items-center px-3 pb-5 pt-5 text-center text-sm text-gray-600 dark:text-gray-300 md:flex-row">
			<div className="mt-2">
				&copy; 2020 - {CONFIG.NOW} All rights reserved. Made with{" "}
				<FiHeart className="inline text-red-500" /> by{" "}
				<Link href="https://github.com/barbarbar338" passHref>
					<a
						target="_blank"
						className="cursor-pointer text-purple-600 hover:underline"
					>
						barbarbar338
					</a>
				</Link>{" "}
				using{" "}
				<Link href="https://nextjs.org/" passHref>
					<a
						target="_blank"
						className="cursor-pointer text-gray-600 hover:underline"
					>
						NextJS
					</a>
				</Link>{" "}
				and{" "}
				<Link href="https://tailwindcss.com/" passHref>
					<a
						target="_blank"
						className="cursor-pointer text-green-700 hover:underline dark:text-green-400"
					>
						TailwindCSS
					</a>
				</Link>
			</div>
			<div className="mt-2 flex flex-row gap-2 md:flex-auto md:flex-row-reverse">
				{CONFIG.CONTACT.map((social, idx) => (
					<Link key={idx} href={social.href} passHref>
						<a target="_blank">
							<social.icon className="w-5 cursor-pointer text-purple-600 hover:text-purple-700 hover:underline dark:text-purple-500 dark:hover:text-purple-600" />
						</a>
					</Link>
				))}
			</div>
		</div>
	</div>
);
