import { Link } from 'react-router';

interface Properties {
	to: string;
	image: string;
	icon: string;
	alt?: string;
	external?: boolean;
}

export function NavItem({ to, image, icon, alt = '', external = false }: Properties) {
	const linkProperties = external
	? {
			target: '_blank' as const,
			rel: 'noopener noreferrer'
		}
	: {};

	return (
		<Link
			to={to}
			{...linkProperties}
			className="relative block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 cursor-pointer -translate-y-2 hover:translate-y-0 transition-transform duration-200 ease-in-out flex-shrink-0"
		>
			<img
				src={image}
				alt={alt}
				className="w-full h-full"
			/>
			<i className={`${icon} fa-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white`}></i>
		</Link>
	);
}