export function NavBar() {
	return (
		<nav className="flex gap-3 items-start justify-end">
			<a
				href="https://github.com/junyali/bricklayer-ysws"
				target="_blank"
				rel="noopener noreferrer"
				className="relative block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 cursor-pointer -translate-y-2 hover:translate-y-0 transition-transform duration-200 ease-in-out"
			>
				<img
					src="/brick_2x2_gh_down.png"
					alt=""
					className="w-full h-full"
				></img>
				<i className="fa-brands fa-github fa-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"></i>
			</a>
			<a
				href="/guide"
				className="relative block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 cursor-pointer -translate-y-2 hover:translate-y-0 transition-transform duration-200 ease-in-out"
			>
				<img
					src="/brick_2x2_red_down.png"
					alt=""
					className="w-full h-full"
				></img>
				<i className="fa-solid fa-book fa-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"></i>
			</a>
		</nav>
	);
}