import {OrpheusFlag} from './components/OrpheusFlag';
import {Footer} from './components/Footer';
import {NavBar} from './components/NavBar.tsx';
import {StepCard} from './components/StepCard.tsx';

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
					<div>
						<div className="flex flex-row items-center text-center justify-center space-x-4 sm:space-x-8 sm:space-y-6 md:space-y-0 py-6 text-md sm:text-2xl font-semibold">
							<StepCard
								title="Lay the foundation"
								imagePath="/step_1.png"
								iconPath="/roblox_studio.png"
							/>
							<StepCard
								title="Wire it up"
								imagePath="/step_2.png"
								iconPath="/vscode.png"
							/>
							<StepCard
								title="Bricks at your doorstep"
								imagePath=""
								iconPath="/pirate_ship.gif"
							/>
						</div>
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
