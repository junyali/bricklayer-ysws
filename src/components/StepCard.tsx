interface Properties {
	title: string;
	imagePath: string;
	iconPath: string;
	titleClassName?: string;
}

export function StepCard({ title, imagePath, iconPath, titleClassName }: Properties) {
	return (
		<div className="flex-1 min-w-0">
			<h3 className={titleClassName}>{title}</h3>
			<div className="relative transition-transform duration-300 hover:scale-105">
				<img
					src={imagePath}
					alt={title}
					className="w-full h-auto aspect-[16/9] object-cover rounded-sm my-2 border-white border-4 outline outline-4 outline-neutral-800 drop-shadow-xl drop-shadow-black"
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