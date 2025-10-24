import OrpheusFlagImg from '/flag-orpheus-top.svg';
export function OrpheusFlag() {
	return (
		<img
			src={OrpheusFlagImg}
			alt=""
			className="max-w-20 sm:max-w-36 left-4 sm:left-12 absolute"
		></img>
	);
}