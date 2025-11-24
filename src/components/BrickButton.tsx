interface Properties {
	href: string;
	text: string;
	className?: string;
}

export function BrickButton({ href, text, className = ''}: Properties) {
	return (
		<a href={href} className="flex justify-center">
			<p
				className={`text-xl sm:text-2xl text-center bg-red-500 text-slate-50 mt-4 mb-8 mx-w-54 px-3 py-4 rounded-sm font-semibold border-black border-4 bg-repeat bg-center ${className}`}
				style={{ backgroundImage: 'url(/box_stud_bright_red.png)' }}
			>
				{text}
			</p>
		</a>
	);
}