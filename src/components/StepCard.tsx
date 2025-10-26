interface Properties {
	title: string;
	imagePath: string;
	iconPath: string;
}

export function StepCard({ title, imagePath, iconPath }: Properties) {
	return (
		<div>
			<h3>{title}</h3>
			<div className="relative">
				<img
					src={imagePath}
					alt={title}
					className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-slate-600 border-4 p-1 sm:p-2 border-dashed"
				></img>
				<img
					src={iconPath}
					alt=""
					className="absolute bottom-3 right-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
				></img>
			</div>
		</div>
	);
}