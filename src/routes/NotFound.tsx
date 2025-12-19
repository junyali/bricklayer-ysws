import { useRouteError, isRouteErrorResponse, Link } from 'react-router';
import { OrpheusFlag } from '../components/OrpheusFlag.tsx';

export function NotFound() {
	const error = useRouteError();
	const isNotFound = isRouteErrorResponse(error) && error.status;
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-grow items-center justify-center px-8 bg-[url(/new_studs.png)] bg-[length:512px_512px] bg-repeat bg-center">
				<div>
					<OrpheusFlag />
				</div>
				<div className="text-center mt-8">
					<Link
						to="/"
						className="max-w-md mx-auto block"
					>
						<img
							src="/confused_dinosaur.png"
							alt=""
							className="w-full"
						></img>
					</Link>
					<h1 className="text-6xl md:text-8xl font-extrabold text-red-500 text-shadow-red-900 text-shadow-sm mb-4">
						{isNotFound ? '404' : 'Oops!'}
					</h1>
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
						{isNotFound ? 'Page Not Found': 'Something went wrong!'}
					</h2>
					<p className="text-xl text-black text-shadow-white text-shadow-lg mb-8">
						Looks like this brick doesn't exist in our set! Orpheus is working on it, click her to return back to the main page.
					</p>
				</div>
			</div>
		</div>
	);
}