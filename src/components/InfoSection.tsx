interface Properties {
	id: string;
	image: string;
	title: string;
	description: string;
}

export function InfoSection({ id, image, title, description}: Properties) {
	return (
		<div
			id={id}
			className="flex flex-col md:flex-row items-start gap-4 scroll-mt-8"
			data-image={image}
		>
			<div className="w-full md:max-w-sm md:hidden">
				<img
					src={image}
					alt=""
					className="w-full h-auto mx-auto shadow-lg"
				/>
			</div>
			<div className="w-full space-y-2">
				<h2
					className="text-3xl sm:text-4xl font-extrabold text-red-500/80 drop-shadow-sm drop-shadow-black"
					style={{
						WebkitTextStroke: '1px white',
						paintOrder: 'stroke fill'
					}}
				>
					{title}
				</h2>
				<p
					className="leading-relaxed text-xl text-slate-50 font-bold drop-shadow-sm drop-shadow-black"
					style={{
						WebkitTextStroke: '2px black',
						paintOrder: 'stroke fill'
					}}
					dangerouslySetInnerHTML={{ __html: description}}
				/>
			</div>
		</div>
	);
}