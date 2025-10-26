import {OrpheusFlag} from './components/OrpheusFlag';
import {Footer} from './components/Footer';
import {NavBar} from "./components/NavBar.tsx";

function App() {
	return (
		<div>
			<div>
				<OrpheusFlag />
			</div>
			<div className="fixed top-0 max-w-48 right-4 sm:right-5 md:right-10">
				<NavBar />
			</div>
			<div className="flex justify-center items-center flex-grow">
				<div className="mt-16 text-slate-950 mx-8 md:max-w-6xl font-mono">
					<div className="flex justify-center items-center align-middle">
						<img
							src="/bricklayer-logo.png"
							alt=""
							className="w-full max-w-xl"
						></img>
					</div>

				</div>
			</div>
			<div className="max-h-96 pt-16">
				<Footer />
			</div>
		</div>
	)
}

export default App
