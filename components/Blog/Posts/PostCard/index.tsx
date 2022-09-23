import type { FC } from "react";
import type { IPost } from "@libs/graphql";
import { FiCalendar, FiClock } from "react-icons/fi";
import { useLocaleParser } from "@libs/localeParser";
import { calculate } from "calculate-readtime";
import Image from "next/image";
import Link from "next/link";

export interface IPostCard {
	post: IPost;
}

export const PostCard: FC<IPostCard> = ({ post }) => {
	const parser = useLocaleParser();
	const time = calculate(post.body, {
		lessThanOne: parser.get("lessThanOne"),
		singular: parser.get("singular"),
		plural: parser.get("plural"),
		wpm: 150,
	});

	return (
		<div className="mt-6">
			<div className="mx-auto max-w-4xl rounded-xl bg-white px-10 py-6 shadow-md dark:bg-gray-800">
				<div className="flex items-center justify-between">
					<span className="flex items-center font-light text-gray-600 dark:text-white">
						<FiCalendar className="mx-2" /> {post.createdAt} -{" "}
						<FiClock className="mx-2" /> {time}
					</span>
				</div>
				<div className="mt-2">
					<Link
						href={`/blog/post/${post.number}`}
						className="cursor-pointer text-2xl font-bold text-gray-700 hover:underline dark:text-white"
					>
						{post.title}
					</Link>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<Link
						href={`/blog/post/${post.number}`}
						className="cursor-pointer text-blue-500 hover:underline"
					>
						{parser.get("read_more")}
					</Link>
					<div>
						<Link
							href={`https://github.com/${post.author.login}`}
							className="flex cursor-pointer items-center hover:underline"
						>
							<Image
								width={32}
								height={32}
								src={post.author.avatarUrl}
								alt="avatar"
								className="hidden h-10 w-10 rounded-full object-cover sm:block"
							/>
							<h1 className="ml-2 font-bold text-gray-700 dark:text-white">
								{post.author.login}
							</h1>
						</Link>
					</div>
				</div>
				<div>
					{post.labels.map((label, idx) => (
						<Link
							key={idx}
							href={`/blog/category/${label.id}`}
							className="m-1 cursor-pointer rounded-xl p-1 text-sm text-black"
							style={{
								backgroundColor: `#${label.color}`,
							}}
						>
							{label.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
