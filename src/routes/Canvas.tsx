import '../styles/Canvas.css';
import { useState } from 'react';
import { OrpheusFlag } from '../components/OrpheusFlag.tsx';
import { Separator } from '../components/Separator';
import { Footer } from '../components/Footer.tsx';
import { ToolButton } from '../components/canvas/ToolButton.tsx';
import { ColourButton } from '../components/canvas/ColourButton.tsx';
import * as React from "react";

type Tool = 'brush' | 'eraser' | 'trowel'

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

const grid_size = 32;
const cell_size = 32;

type GridCell = {
	colour: string | null;
	studType: 'stud' | 'inlet';
} | null;

export function Canvas() {
	const [selectedTool, setSelectedTool] = useState<Tool>('brush');
	const [selectedColour, setSelectedColour] = useState(Colours[0].value);
	const [grid, setGrid] = useState<GridCell[][]>(
		Array(grid_size).fill(null).map(() => Array(grid_size).fill(null))
	);
	const [isDrawing, setIsDrawing] = useState(false);
	const [showFlash, setShowFlash] = useState(false);
	const [showPolaroid, setShowPolaroid] = useState(false);
	const [savedImage, setSavedImage] = useState<string | null>(null);

	const handleCellClick = (row: number, col: number) => {
		const newGrid = [...grid];
		if (selectedTool === 'brush') {
			newGrid[row][col] = { colour: selectedColour, studType: 'stud' };
		} else if (selectedTool === 'eraser')  {
			newGrid[row][col] = null;
		} else if (selectedTool === 'trowel') {
			const currentCell = newGrid[row][col];
			if (currentCell) {
				newGrid[row][col] = {
					colour: currentCell.colour,
					studType: currentCell.studType === 'stud' ? 'inlet' : 'stud'
				};
			}
		}
		setGrid(newGrid)
	}

	const handleMouseDown = (row: number, col: number, e: React.MouseEvent) => {
		e.preventDefault()
		setIsDrawing(true);
		handleCellClick(row, col);
	}

	const handleMouseEnter = (row: number, col: number) => {
		if (isDrawing) {
			handleCellClick(row, col);
		}
	}

	const handleMouseUp = () => {
		setIsDrawing(false);
	}

	const handleTouchStart = (row: number, col: number, e: React.TouchEvent) => {
		e.preventDefault();
		setIsDrawing(true);
		handleCellClick(row, col);
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDrawing) return;
		e.preventDefault();
		const touch = e.touches[0]
		const element = document.elementFromPoint(touch.clientX, touch.clientY);
		if (element && element.hasAttribute('data-cell')) {
			const row = parseInt(element.getAttribute('data-row') || '0');
			const col = parseInt(element.getAttribute('data-col') || '0');
			handleCellClick(row, col);
		}
	}

	const handleTouchEnd = () => {
		setIsDrawing(false);
	}

	const handleSave = async () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const imageSize = grid_size * cell_size;
		canvas.width = imageSize;
		canvas.height = imageSize;

		const bgImage = new Image();
		bgImage.src = '/universal_bright_white.png';

		await new Promise((resolve) => {
			bgImage.onload = resolve;
		});

		const tempCanvas = document.createElement('canvas');
		const tempCtx = tempCanvas.getContext('2d');
		if (!tempCtx) return;

		tempCanvas.width = 256;
		tempCanvas.height = 256;
		tempCtx.drawImage(bgImage, 0, 0, 256, 256);

		const pattern = ctx.createPattern(tempCanvas, 'repeat');
		if (pattern) {
			ctx.fillStyle = pattern;
			ctx.fillRect(0, 0, imageSize, imageSize)
		}

		const studImage = new Image();
		const inletImage = new Image();
		studImage.src = '/studalpha_1x1.png';
		inletImage.src = '/inletalpha_1x1.png';

		await Promise.all([
			new Promise((resolve) => { studImage.onload = resolve; }),
			new Promise((resolve) => { inletImage.onload = resolve; })
		]);

		for (let row = 0; row < grid_size; row++) {
			for (let col = 0; col < grid_size; col++) {
				const cell = grid[row][col];
				if (cell && cell.colour) {
					const x = col * cell_size;
					const y = row * cell_size;

					ctx.fillStyle = cell.colour;
					ctx.fillRect(x, y, cell_size, cell_size);

					ctx.globalCompositeOperation = 'multiply';
					const image = cell.studType === 'stud' ? studImage : inletImage;
					ctx.drawImage(image, x, y, cell_size, cell_size);
					ctx.globalCompositeOperation = 'source-over';
				}
			}
		}

		const blob = await new Promise<Blob | null>((resolve) => {
			canvas.toBlob((b) => resolve(b), 'image/png');
		});

		if (!blob) return;

		const dataUrl = canvas.toDataURL('image/png');
		setSavedImage(dataUrl);

		setShowFlash(true);

		setTimeout(() => {
			setShowFlash(false);
		}, 300);

		setTimeout(() => {
			setShowPolaroid(true);
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `bricklayer-canvas-${Date.now()}.png`;
			link.click();
			URL.revokeObjectURL(url);
		}, 1000);
	}

	const handleClosePolaroid = () => {
		setShowPolaroid(false);
		setSavedImage(null);
	}

	return (
		<div className="min-h-screen bg-[url(/new_studs.png)] bg-[length:256px_256px] bg-repeat bg-center">
			{showFlash && (
				<div
					className="fixed inset-0 bg-white z-100 pointer-events-none"
					style={{
						animation: 'flash 300ms ease-out forwards'
					}}
				/>
			)}
			{showPolaroid && savedImage && (
				<div
					className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
					onClick={handleClosePolaroid}
				>
					<div
						className="bg-white p-8 pb-32 border-black shadow-2xl max-w-2xl w-full"
						style={{
							animation: 'pdrop 500ms ease-out forwards'
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={savedImage}
							alt="Canvas"
							className="w-full h-auto border-2 border-gray-200"
						/>
					</div>
				</div>
			)}
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
					<ToolButton
						icon="/canvas/trowel.png"
						label="Trowel"
						isSelected={selectedTool === 'trowel'}
						onClick={() => setSelectedTool('trowel')}
					/>
					<div className="border-t-2 border-gray-300 my-2"></div>
					<button
						onClick={handleSave}
						className="group relative w-12 h-12 flex items-center justify-center rounded-lg border transition-all bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
						title="Save"
					>
						<img
							src="/canvas/save.png"
							alt="Save"
							className="w-8 h-8 object-contain"
						/>
						<span className="absolute left-full ml-4 px-3 py-1 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
							Save your masterpiece!
						</span>
					</button>
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
						className="bg-[url(/universal_bright_white.png)] bg-[length:256px_256px] bg-repeat bg-center border-4 border-black rounded-lg shadow-2xl overflow-hidden aspect-square"
						style={{
							width: `min(${grid_size * cell_size}px, calc(100vw - 16rem))`,
							maxWidth: `${grid_size * cell_size}`,
							display: 'grid',
							gridTemplateColumns: `repeat(${grid_size}, 1fr)`,
							gridTemplateRows: `repeat(${grid_size}, 1fr)`,
							touchAction: 'none'
						}}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchEnd={handleTouchEnd}
						onTouchMove={handleTouchMove}
						onDragStart={(e) => e.preventDefault()}
					>
						{grid.map((row, rowIndex) =>
							row.map((cell, colIndex) => (
								<div
									key={`${rowIndex}-${colIndex}`}
									className="cursor-crosshair select-none"
									data-cell="true"
									data-row={rowIndex}
									data-col={colIndex}
									style={{
										backgroundColor: cell?.colour || 'transparent',
										backgroundImage: cell
											? `url(/${cell.studType === 'stud' ? 'stud' : 'inlet'}alpha_1x1.png)`
											: 'none',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundBlendMode: 'multiply'
									}}
									onMouseDown={(e) => handleMouseDown(rowIndex, colIndex, e)}
									onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
									onTouchStart={(e) => handleTouchStart(rowIndex, colIndex, e)}
									onDragStart={(e) => e.preventDefault()}
								/>
							))
						)}
					</div>
				</main>
			</div>
			<Separator />
			<Footer />
		</div>
	);
}