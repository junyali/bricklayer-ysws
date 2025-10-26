import {OrpheusFlag} from './components/OrpheusFlag';
import {Footer} from './components/Footer';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div>
				<OrpheusFlag />
			</div>
			<div className="flex justify-center items-center flex-grow">
				<div className="text-slate-950 mx-8 md:max-w-6xl font-mono">
					<div className="flex justify-center items-center align-middle">
						<img
							src="/bricklayer-logo.png"
							alt=""
							className="w-full max-w-xl"
						></img>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
