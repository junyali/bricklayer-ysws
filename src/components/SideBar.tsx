import { Link } from 'react-router';
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
			<Link
				to="/"
			>
				<img
					src="/bricklayer-logo.png"
					alt=""
					className="my-2"
				></img>
			</Link>
			<nav className="text-xl">
				<ul>
					<li>
						<Link to="/guide" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-red-500 text-shadow-sm text-shadow-red-900">
							Guide
						</Link>
						<Link to="/advanced" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-orange-500 text-shadow-sm text-shadow-orange-900">
							Advancing to the next step
						</Link>
						<Link to="/resources" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-yellow-500 text-shadow-sm text-shadow-yellow-900">
							Resources
						</Link>
						<Link to="/submission" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-green-500 text-shadow-sm text-shadow-green-900">
							Submit your game!
						</Link>
						<Link to="/faq" className="block py-2 px-4 rounded hover:bg-white/50 transition-all font-semibold text-blue-500 text-shadow-sm text-shadow-blue-900">
							FAQ
						</Link>
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