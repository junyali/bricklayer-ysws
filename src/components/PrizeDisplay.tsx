import {useState, useEffect, act} from 'react';

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
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		let animationFrame: number;
		let lastTime = Date.now();
		const cycleSpeed = 0.3;

		const animate = () => {
			const currentTime = Date.now();
			const deltaTime = (currentTime - lastTime) / 1000;
			lastTime = currentTime;

			setOffset((prev) => {
				const newOffset = prev + cycleSpeed * deltaTime;
				return newOffset % prizes.length;
			});
			animationFrame = requestAnimationFrame(animate);
		};
		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [prizes.length]);

	const getVisiblePrizes = () => {
		const visible = [];
		for (let i = -4; i <= 4; i++) {
			visible.push(i);
		}
		return visible
	};

	const getScale = (position: number) => {
		const distance = Math.abs(position);

		if (distance <= 1) {
			return 1.5 - (distance * 0.5);
		} else if (distance <= 2) {
			return 1.0 - ((distance - 1) * 0.3);
		} else if (distance <= 3) {
			return 0.7 - ((distance - 2) * 0.2);
		} else {
			return 0.75;
		}
	};

	const getZIndex = (position: number) => {
		return Math.round(50 - Math.abs(position) * 10);
	};

	return (
		<div className="relative w-full overflow-hidden py-16">
			<div className="flex items-center justify-center gap-4 relative h-64">
				{getVisiblePrizes().map((position) => {
					const actualPosition = position - offset;
					const prizeIndex = Math.floor(actualPosition) % prizes.length;
					const adjustedIndex = prizeIndex < 0 ? prizes.length + prizeIndex : prizeIndex;
					return (
						<div
							key={position}
							className="absolute"
							style={{
								left: `calc(50% + ${actualPosition * 256}px)`,
								transform: `translateX(-50%) scale(${getScale(actualPosition)})`,
								zIndex: getZIndex(actualPosition),
							}}
						>
							<div className="p-4 w-48 h-48 flex items-center justify-center">
								<img
									src={prizes[adjustedIndex]}
									alt="meow"
									className="max-w-full max-h-full object-contain drop-shadow-lg drop-shadow-black"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};