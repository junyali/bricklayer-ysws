import '../styles/App.css';
import { OrpheusFlag } from '../components/OrpheusFlag.tsx';
import { Footer } from '../components/Footer.tsx';
import { NavBar } from '../components/navigation/NavBar.tsx';
import { StepCard } from '../components/StepCard.tsx';
import { Separator } from '../components/Separator.tsx';
import { FAQ } from '../components/FAQ.tsx';
import { BrickButton } from '../components/BrickButton.tsx';
import { InfoContainer } from '../components/InfoContainer.tsx';
import { infoData } from '../data/info';

export function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-grow">
				<div>
					<OrpheusFlag />
				</div>
				<div className="fixed top-0 max-w-48 right-4 sm:right-5 md:right-10 z-100">
					<NavBar />
				</div>
				<div className="flex flex-grow justify-center items-center mb-32">
					<div className="mt-16 text-slate-950 mx-8 md:max-w-6xl font-mono">
						<div className="flex justify-center items-center align-middle mb-8">
							<img
								src="/bricklayer-logo.png"
								alt=""
								className="w-full max-w-xl transition-transform duration-300 hover:scale-110"
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
						<BrickButton
							href="https://forms.fillout.com/t/hZeXivyrgrus"
							text="RSVP Here!"
						/>
						<div className="relative w-full max-w-xl pt-8 mb-8 mx-auto drop-shadow-lg drop-shadow-black">
							<img
								src="/orpheus_lego.png"
								alt=""
								className="transition-transform duration-300 hover:drop-shadow-lg drop-shadow-black animate-[rock_2s_ease-in-out_infinite]"
							></img>
						</div>
						<div>
							<div className="flex flex-col lg:flex-row items-center text-center justify-center space-y-8 lg:space-y-0 lg:space-x-4 xl:space-x-8 py-6 text-lg sm:text-3xl font-bold whitespace-nowrap">
								<StepCard
									title="Lay the foundation"
									imagePath="/step_1.jpg"
									iconPath="/roblox_studio_red.png"
									titleClassName="text-red-500 text-shadow-sm text-shadow-red-900"
								/>
								<StepCard
									title="Wire it up"
									imagePath="/step_2.jpg"
									iconPath="/vscode.png"
									titleClassName="text-blue-500 text-shadow-sm text-shadow-blue-900"
								/>
								<StepCard
									title="Bricks @ your doorstep"
									imagePath="/step_3.jpg"
									iconPath="/pirate_ship.gif"
									titleClassName="text-yellow-500 text-shadow-sm text-shadow-yellow-900"
								/>
							</div>
						</div>
						<div className="mb-8">
							<BrickButton
								href="/guide"
								text="Learn how to make a game ➜"
							/>
							<p
								className="text-center text-2xl text-slate-50 font-bold pt-2 drop-shadow-lg drop-shadow-black"
								style={{
									WebkitTextStroke: '2px black',
									paintOrder: 'stroke fill'
								}}
							>
								You should also totally join{" "}
								<a
									href="https://hackclub.slack.com/archives/C091BU30NGK"
									target="_blank"
									className="text-3xl text-slate-400 transition-all duration-300 hover:text-slate-500 hover:scale-105 inline-block"
								>
									#bricklayer
								</a>{" "}
								on the{" "}
								<a
									href="https://hackclub.com/slack/"
									target="_blank"
									className="text-2xl text-red-300 transition-all duration-300 hover:text-red-500 hover:scale-105 inline-block"
								>
									{" "}
									Hack Club Slack
								</a>
								!
							</p>
						</div>
						<InfoContainer items={infoData} />
					</div>
				</div>
				<Separator />
				<div
					className="min-h-screen flex justify-center items-center py-16 bg-[url(/inlet_bright_white.png)] bg-[length:512px_512px] bg-repeat bg-center"
				>
					<div className="w-full px-8">
						<h2
							className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-8 text-red-500/80 drop-shadow-lg drop-shadow-black leading-tight"
							style={{
								WebkitTextStroke: '1px white',
								paintOrder: 'stroke fill'
							}}
						>
							FAQ
						</h2>
						<p
							className="text-center text-2xl text-slate-50 font-bold pt-2 drop-shadow-lg drop-shadow-black"
							style={{
								WebkitTextStroke: '2px black',
								paintOrder: 'stroke fill'
							}}
						>
							For more information or help, please ask in{' '}
							<a
								href="https://hackclub.slack.com/archives/C091BU30NGK"
								target="_blank"
								className="text-3xl text-slate-400 transition-all duration-300 hover:text-slate-500 hover:scale-105 inline-block"
							>
								#bricklayer
							</a>{" "}
							for help!
						</p>
						<div className="w-full max-w-6xl min-h-[80vh] mx-auto bg-white/10 backdrop-blur-sm shadow-black shadow-lg rounded-lg border-4 border-white outline outline-4 outline-neutral-800 p-8 mt-8">
							<FAQ />
						</div>
					</div>
				</div>
			</div>
			<Separator />
			<div className="max-h-96">
				<Footer />
			</div>
		</div>
	)
}
