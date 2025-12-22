import { useState, useEffect } from 'react';

export const PrizeDisplay = () => {
	const prizes = [
		"/prizes/lego_box.png",
		"/prizes/blahaj.png",
		"/prizes/mouldking_gt.png",
		"/prizes/lego_millenium.png",
		"/prizes/mouldking_turbojet.png",
		"/prizes/lego_creeper.png",
		"/prizes/reobrix_clocktower.png",
		"/prizes/lego_creative.png",
		"/prizes/lego_identity.png"
	]

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % prizes.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [prizes.length]);

	const getVisiblePrizes = () => {
		const visible = [];
		for (let i = -4; i <= 4; i++) {
			const index = (currentIndex + i + prizes.length) % prizes.length;
			visible.push({ image: prizes[index], offset: i });
		}
		return visible
	};

	const getScale = (offset: number) => {
		if (offset === 0) return 'scale-125';
		if (Math.abs(offset) === 1) return 'scale-100';
		return 'scale-75';
	};

	const getZIndex = (offset: number) => {
		return 50 - Math.abs(offset);
	};

	return (
		<div className="relative w-full overflow-hidden py-16">
			<div className="flex items-center justify-center gap-4 relative h-64">
				{getVisiblePrizes().map(({ image, offset }, index) => (
					<div
						key={`${image}-${index}`}
						className={`absolute transition-all duration-500 ease-in-out ${getScale(offset)}`}
						style={{
							left: `calc(50% + ${offset * 256}px)`,
							transform: 'translateX(-50%)',
							zIndex: getZIndex(offset),
						}}
					>
						<div className="p-4 w-48 h-48 flex items-center justify-center">
							<img
								src={image}
								alt="meow"
								className="max-w-full max-h-full object-contain drop-shadow-lg drop-shadow-black"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};