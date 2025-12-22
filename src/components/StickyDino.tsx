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
			const viewportCentre = window.scrollY + window.innerHeight / 2;

			let closestSection = 0;
			let closestDistance = Infinity;

			sectionElements.forEach((element, index) => {
				if (element) {
					const rect = element.getBoundingClientRect();
					const elementCentre = rect.top + window.scrollY + rect.height / 2;
					const distance = Math.abs(viewportCentre - elementCentre);

					if (viewportCentre >= elementCentre && distance < closestDistance) {
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
		<div
			className="items-center max-h-[80vh] hidden md:flex w-full md:max-w-sm sticky self-start"
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
	);
}