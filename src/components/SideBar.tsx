import { OrpheusFlag } from './OrpheusFlag';

export function SideBar() {
	return (
		<aside
			className="flex flex-col bg-white space-y-2 max-w-prose p-2 h-screen border-r-4 border-black border-solid bg-repeat bg-center"
			style={{
				backgroundImage: 'url(/inlet_bright_white.png)',
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
						<a href="/advanced" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-orange-500 text-shadow-sm text-shadow-orange-900">
							Advancing to the next step
						</a>
						<a href="/resources" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-yellow-500 text-shadow-sm text-shadow-yellow-900">
							Resources
						</a>
						<a href="/submission" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-green-500 text-shadow-sm text-shadow-green-900">
							Submit your game!
						</a>
						<a href="/faq" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-blue-500 text-shadow-sm text-shadow-blue-900">
							FAQ
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