import { useState } from 'react';
import { OrpheusFlag } from '../components/OrpheusFlag';
import { Footer } from '../components/Footer';
import { ToolButton } from '../components/ToolButton';
import { ColourButton } from '../components/ColourButton';

type Tool = 'brush' | 'eraser'

const Colours = [
	{ name: 'Bright Red', value: '#C4281C' },
	{ name: 'Bright Blue', value: '#0D69AC' },
	{ name: 'Bright Yellow', value: '#F5CD30' },
	{ name: 'Bright Green', value: '#4B974B' },
	{ name: 'Bright Violet', value: '#6B327C' },
	{ name: 'Bright Orange', value: '#DA8541' },
	{ name: 'Bright Bluish Green', value: '#008F9C' },
	{ name: 'Bright Purple', value: '#CD6298' },
	{ name: "Really Black", value: '#111111' },
	{ name: 'Black', value: '#1B2A35' },
	{ name: 'Dark Stone Grey', value: '#635F62' },
	{ name: 'Medium Stone Grey', value: '#A3A2A5' },
	{ name: 'Light Stone Grey', value: '#E5E4DF' },
	{ name: 'Institutional White', value: '#F8F8F8' },
]

export function Canvas() {
	const [selectedTool, setSelectedTool] = useState<Tool>('brush');
	const [selectedColour, setSelectedColour] = useState(Colours[0].value);

	return (
		<div className="min-h-screen bg-[url(/new_studs.png)] bg-[length:256px_256px] bg-repeat bg-center">
			<div>
				<OrpheusFlag />
			</div>
			<div className="inline justify-center items-center mt-4 font-extrabold">
				<div className="flex justify-center items-center align-middle mb-8">
					<img
						src="/bricklayer-logo.png"
						alt=""
						className="w-full max-w-xl"
					></img>
					<h1
						className="text-6xl text-red-500/80 drop-shadow-black"
						style={{
							WebkitTextStroke: '1px white',
							paintOrder: 'stroke fill'
						}}
					>
						Canvas
					</h1>
				</div>
			</div>
			<div className="flex flex-1 relative items-center">
				<aside className="absolute left-0 bg-white border-4 border-l-0 border-black rounded-r-xl shadow-lg p-2 space-y-1 z-10">
					<ToolButton
						icon="/canvas/paintbrush.png"
						label="Brush"
						isSelected={selectedTool === 'brush'}
						onClick={() => setSelectedTool('brush')}
					/>
					<ToolButton
						icon="/canvas/eraser.png"
						label="Eraser"
						isSelected={selectedTool === 'eraser'}
						onClick={() => setSelectedTool('eraser')}
					/>
				</aside>
				<aside className="absolute right-0 bg-white border-4 border-r-0 border-black rounded-l-xl shadow-lg p-2 z-10">
					<div className="grid grid-cols-2 gap-2">
						{Colours.map((colour) => (
							<ColourButton
								key={colour.value}
								name={colour.name}
								value={colour.value}
								isSelected={selectedColour === colour.value}
								onClick={() => setSelectedColour(colour.value)}
							/>
						))}
					</div>
				</aside>
				<main className="flex-1 flex items-center justify-center p-8">
					<div
						className="bg-[url(/universal_bright_white.png)] bg-[length:256px_256px] bg-repeat bg-center border-4 border-black rounded-lg shadow-2xl"
						style={{
							width: '640px',
							height: '640px'
						}}
					>

					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}