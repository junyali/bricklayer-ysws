interface Properties {
	icon: string;
	label: string;
	isSelected: boolean;
	onClick: () => void;
}

export function ToolButton({ icon, label, isSelected, onClick }: Properties) {
	return (
		<button
			onClick={onClick}
			className={`group relative w-12 h-12 flex items-center justify-center rounded-lg border transition-all ${
				isSelected
					? 'bg-gray-500/20 border-gray-700 text-white'
					: 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
			}`}
			title="label"
		>
			<img
				src={icon}
				alt="label"
				className="w-8 h-8 object-contain"
			/>
			<span className="absolute left-full ml-4 px-3 py-1 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
				{label}
			</span>
		</button>
	);
}