import { useState, useEffect, useRef } from 'react';

interface Properties {
	sections: Array<{ id: string; image: string }>;
}

export function StickyDino({ sections }: Properties) {
	const [currentImage, setCurrentImage] = useState(sections[0]?.image || '');
	const [topOffset, setTopOffset] = useState('50vh');
	const dinoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sectionElements = sections.map(s => document.getElementById(s.id));

			let dinoCentre = window.innerHeight / 2;
			if (dinoRef.current) {
				const dinoRect = dinoRef.current.getBoundingClientRect();
				dinoCentre = dinoRect.top + dinoRect.height / 2;
			}

			let closestSection = 0;
			let closestDistance = Infinity;

			sectionElements.forEach((element, index) => {
				if (element) {
					const rect = element.getBoundingClientRect();
					const elementCentre = rect.top + rect.height / 2;
					const distance = Math.abs(dinoCentre - elementCentre);

					if (distance < closestDistance) {
						closestDistance = distance;
						closestSection = index;
					}
				}
			});
			setCurrentImage(sections[closestSection].image);

			if (dinoRef.current) {
				const container = dinoRef.current.offsetParent;
				if (container) {
					const containerRect = container.getBoundingClientRect();
					const dinoHeight = dinoRef.current.offsetHeight;
					const topPosition = window.innerHeight / 2 - dinoHeight / 2;
					const containerTop = containerRect.top;
					const containerBottom = containerRect.bottom;
					const minTop = Math.max(0, containerTop);
					const maxTop = containerBottom - dinoHeight;
					const safeTop = Math.max(minTop, Math.min(topPosition, maxTop));

					setTopOffset(`${safeTop}px`);

					/*
					wow so many f*cking constants
					"if it works don't change it"
					- some guy, idk when
					*/
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll);
	}, [sections]);

	return (
		<div className="relative hidden md:flex w-full md:max-w-xs">
			<div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gray-950 rounded-lg border-4 border-white outline outline-4 outline-neutral-800 shadow-lg z-0"></div>
			<div
				ref={dinoRef}
				className="items-center max-h-[80vh] w-full flex sticky self-start z-10 rounded-sm border-4 border-white outline outline-4 outline-neutral-800 shadow-lg"
				style={{
					top: topOffset,
				}}
			>
				<img
					src={currentImage}
					alt="orphy!!"
					className="w-full h-auto mx-auto shadow-lg"
					key={currentImage}
				/>
			</div>
		</div>
	);
}
