import OrpheusFlagImg from '/flag-orpheus-top.svg';
import OrpheusFlagImgAlt from '/flag-orpheus-left.svg';

interface Properties {
	type?: 1 | 2;
}

export function OrpheusFlag({ type = 1 }: Properties) {
	if (type == 2) {
		return (
			<a
				href="https://hackclub.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="max-w-20 sm:max-w-32 left-0 absolute">
					<img
						src={OrpheusFlagImgAlt}
						alt=""
						className="object-contain origin-top-left duration-100 transition-transform hover:rotate-[15deg] hover:scale-120 hover:-translate-y-1"
					></img>
				</div>
			</a>
		)
	}

	return (
		<a
			href="https://hackclub.com/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="max-w-20 sm:max-w-36 left-4 sm:left-12 absolute">
				<img
					src={OrpheusFlagImg}
					alt=""
					className="object-contain origin-top-right duration-100 transition-transform hover:rotate-[5deg] hover:scale-110 hover:-translate-y-1"
				></img>
			</div>
		</a>
	);
}