export function Footer() {
	return (
		<footer>
			<div
				className="bg-red-600 py-12 text-center bg-[url(/weld_bright_red.png)] bg-[length:512px_512px] bg-repeat bg-center text-2xl"
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
			</div>
		</footer>
	);
}