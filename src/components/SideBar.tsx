import {OrpheusFlag} from "./OrpheusFlag.tsx";

export function SideBar() {
	return (
		<aside
			className="flex flex-col bg-white space-y-2 max-w-prose p-2 h-screen border-r-4 border-black border-solid bg-repeat bg-center"
			style={{
				backgroundImage: 'url(/universal_white.png)',
				backgroundSize: '256px 256px'
			}}
		>
			<a
				href="/"
			>
				<img
					src="/bricklayer-logo.png"
					alt=""
					className="my-2"
				></img>
			</a>
			<nav className="text-xl">
				<ul>
					<li>
						<a href="/guide" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-red-500 text-shadow-sm text-shadow-red-900">
							Guide
						</a>
					</li>
				</ul>
			</nav>
			<div className="flex-grow"></div>
			<div className="mb-16">
				<OrpheusFlag type={2} />
			</div>
		</aside>
	);
}