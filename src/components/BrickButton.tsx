import { Link } from 'react-router';

interface Properties {
	href: string;
	text: string;
	className?: string;
}

export function BrickButton({ href, text, className = ''}: Properties) {
	return (
		<div className="flex justify-center my-4">
			<Link
				to={href}
				className={`text-xl sm:text-2xl text-center bg-red-500 text-slate-50 px-3 py-4 rounded-sm font-semibold border-black border-2 bg-repeat bg-center shadow-black shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:shadow-md hover:border-red-900 hover:-translate-y-1 active:translate-y-0 active:scale-100 cursor-pointer inline-block whitespace-nowrap ${className}`}
				style={{ backgroundImage: 'url(/box_stud_bright_red.png)' }}
			>
				<p
					style={{
						WebkitTextStroke: '2px black',
						paintOrder: 'stroke fill'
					}}
				>
					{text}
				</p>
			</Link>
		</div>
	);
}