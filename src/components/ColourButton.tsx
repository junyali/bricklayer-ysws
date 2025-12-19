interface Properties {
	name: string;
	value: string;
	isSelected: boolean;
	onClick: () => void;
}

export function ColourButton({ name, value, isSelected, onClick }: Properties) {
	return (
		<button
			onClick={onClick}
			className={`group relative w-8 h-8 rounded-lg border-1 transition-all hover:scale-110 ${
				isSelected
					? 'border-black border-2 scale-110 shadow-lg'
					: 'border-gray-200'
			}`}
			style={{ backgroundColor: value }}
			title={name}
		>
			<span className="absolute right-full mr-4 px-3 py-1 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none top-1/2 -translate-y-1/2">
				{name}
			</span>
		</button>
	);
}