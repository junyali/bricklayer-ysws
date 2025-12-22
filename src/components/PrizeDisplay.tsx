import {useState, useEffect} from 'react';

export const PrizeDisplay = () => {
	const prizes = [
		"/prizes/lego_box.webp",
		"/prizes/blahaj.webp",
		"/prizes/mouldking_gt.webp",
		"/prizes/lego_millenium.webp",
		"/prizes/mouldking_turbojet.webp",
		"/prizes/lego_creeper.webp",
		"/prizes/reobrix_clocktower.webp",
		"/prizes/lego_creative.webp",
		"/prizes/lego_identity.webp"
	]

	const infinitePrizes = [...prizes, ...prizes, ...prizes, ...prizes, ...prizes];
	const itemWidth = 220;
	const [scrollPosition, setScrollPosition] = useState(prizes.length * itemWidth * 2);

	useEffect(() => {
		let animationFrame: number;
		const speed = 50;

		const animate = () => {
			setScrollPosition((prev) => {
				const newPos = prev + speed / 60

				if (newPos >= prizes.length * itemWidth * 3) {
					return newPos - (prizes.length * itemWidth);
				}
				return newPos;
			});
			animationFrame = requestAnimationFrame(animate);
		};
		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [prizes.length]);

	const getScale = (dFC: number) => {
		const absDistance = Math.abs(dFC);

		if (absDistance < 100) {
			return 1.5 - (absDistance / 100) * 0.5;
		} else {
			return 1.0;
		}
	};

	return (
		<div className="relative w-full overflow-hidden py-16">
			<div className="flex items-center justify-center gap-4 relative h-64">
				{infinitePrizes.map((prize, index) => {
					const itemWidth = 220;
					const dFC = (index * itemWidth) - scrollPosition;
					const scale = getScale(dFC);
					return (
						<div
							key={`${prize}-${index}`}
							className="absolute"
							style={{
								left: `50%`,
								transform: `translateX(calc(-50% + ${dFC}px)) scale(${scale})`,
								zIndex: Math.round(100 - Math.abs(dFC) / 10),
							}}
						>
							<div className="p-4 w-48 h-48 flex items-center justify-center">
								<picture>
									<source srcSet={prize} type="image/webp" />
									<img
										src={prize.replace('.webp', '.png')}
										alt="meow"
										className="max-w-full max-h-full object-contain drop-shadow-lg drop-shadow-black"
									/>
								</picture>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};