import { useState, useEffect } from 'react';

interface Properties {
	sections: Array<{ id: string; image: string }>;
}

export function StickyDino({ sections }: Properties) {
	const [currentImage, setCurrentImage] = useState(sections[0]?.image || '');

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
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll);
	}, [sections]);

	return (
		<div
			className="items-center max-h-[80vh] hidden md:flex w-full md:max-w-sm sticky self-start"
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