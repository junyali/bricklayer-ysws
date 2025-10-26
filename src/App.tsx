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
					<div className="flex justify-center items-center align-middle mb-8">
						<img
							src="/bricklayer-logo.png"
							alt=""
							className="w-full max-w-xl"
						></img>
					</div>
					<h2
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 drop-shadow-xl bg-clip-text drop-shadow-black text-transparent leading-tight px-4"
						style={{
							WebkitTextStroke: '1px white',
							paintOrder: 'stroke fill'
						}}
					>
						Make a game in the Roblox Engine. Get LEGO®!
					</h2>
					<div className="relative w-full max-w-xl mb-8 mx-auto drop-shadow-xl drop-shadow-black">
						<img
							src="/orpheus_lego.png"
							alt=""
						></img>
					</div>
					<div>
						<div className="flex flex-col lg:flex-row items-center text-center justify-center space-y-8 lg:space-y-0 lg:space-x-4 xl:space-x-8 py-6 text-lg sm:text-3xl font-bold whitespace-nowrap">
							<StepCard
								title="Lay the foundation"
								imagePath="/step_1.png"
								iconPath="/roblox_studio_red.png"
								titleClassName="text-red-500 text-shadow-sm text-shadow-red-900"
							/>
							<StepCard
								title="Wire it up"
								imagePath="/step_2.png"
								iconPath="/vscode.png"
								titleClassName="text-blue-500 text-shadow-sm text-shadow-blue-900"
							/>
							<StepCard
								title="Bricks @ your doorstep"
								imagePath="/step_3.png"
								iconPath="/pirate_ship.gif"
								titleClassName="text-yellow-500 text-shadow-sm text-shadow-yellow-900"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-16 max-h-96 pt-16">
				<Footer />
			</div>
		</div>
	)
}

export default App
