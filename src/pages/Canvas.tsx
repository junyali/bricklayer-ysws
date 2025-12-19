import { useState } from 'react';
import { OrpheusFlag } from '../components/OrpheusFlag';
import { Footer } from '../components/Footer';
import { ToolButton } from '../components/ToolButton';

type Tool = 'brush' | 'eraser'

export function Canvas() {
	const [selectedTool, setSelectedTool] = useState<Tool>('brush');

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