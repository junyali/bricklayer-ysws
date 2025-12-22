import { useEffect, useState } from 'react';
import { getLatestCommit } from '../api/GitHub';

interface CommitInfo {
	hash: string;
	html_url: string;
	date: string;
}

export function Footer() {
	const [commit, setCommit] = useState<CommitInfo | null>(null);

	useEffect(() => {
		const fetchCommit = async () => {
			const data = await getLatestCommit();
			if (data) {
				setCommit({
					hash: data.hash,
					html_url: data.html_url,
					date: data.date
				});
			}
		};

		fetchCommit().catch();
	}, []);

	return (
		<footer>
			<div
				className="bg-red-600 py-8 text-center bg-[url(/weld_bright_red.png)] bg-[length:512px_512px] bg-repeat bg-center text-2xl"
			>
				<p
					className="font-bold text-white text-shadow-sm text-shadow-pink-400"
				>
					<span>made with ❤️ by</span>
					{' '}
					<a
						href="https://hackclub.enterprise.slack.com/team/U082PAFDDS5"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-gray-400 transition-colors"
					>
						@junya
					</a>
					{' '}
					<span>// follow me on</span>
					{' '}
					<a
						href="https://github.com/junyali"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sky-300 text-blue hover:text-blue-100 underline decoration underline-offset-2 transition-colors"
					>
						github
					</a>
					<span>!</span>
				</p>
				{commit && (
					<p className="mt-4 text-base font-medium text-white/90 flex items-center justify-center gap-2">
						<span>Latest commit: </span>
						<a
							href={commit.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="font-mono text-yellow-200 hover:text-yellow-100 transition-colors underline decoration-dotted underline-offset-2"
						>
							{commit.hash}
						</a>
						<span className="text-white/70"> - </span>
						<span className="text-white/80">{commit.date}</span>
					</p>
				)}
			</div>
		</footer>
	);
}