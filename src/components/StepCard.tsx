interface Properties {
	title: string;
	imagePath: string;
	iconPath: string;
	titleClassName?: string;
}

export function StepCard({ title, imagePath, iconPath, titleClassName }: Properties) {
	return (
		<div>
			<h3 className={titleClassName}>{title}</h3>
			<div className="relative">
				<img
					src={imagePath}
					alt={title}
					className="max-h-56 sm:max-h-80 md:max-h-96 rounded-sm my-2 border-neutral-800 border-4 p-1 sm:p-2 border-white drop-shadow-xl drop-shadow-black"
				></img>
				<img
					src={iconPath}
					alt=""
					className="absolute -bottom-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 drop-shadow-lg drop-shadow-amber-50"
				></img>
			</div>
		</div>
	);
}