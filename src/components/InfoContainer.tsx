import React from 'react';
import { InfoSection } from './InfoSection';
import { StickyDino } from './StickyDino';

interface Properties {
	id: string;
	image: string;
	title: string;
	description: React.ReactNode;
}

interface ContainerProperties {
	items: Properties[];
}

export function InfoContainer({ items }: ContainerProperties) {
	const sections = items.map(item => ({ id: item.id, image: item.image }));

	return (
		<div className="relative bg-[url(/new_studs.png)] bg-[length:512px_512px] bg-center bg-repeat shadow-black shadow-lg rounded-lg border-4 border-white outline outline-4 outline-neutral-800 p-8">
			<div className="flex flex-col md:flex-row gap-4">
				<StickyDino sections={sections} />
				<div className="flex-1 space-y-8">
					{items.map((item) => (
						<InfoSection
							key={item.id}
							id={item.id}
							image={item.image}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}