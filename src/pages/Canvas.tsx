import { OrpheusFlag } from '../components/OrpheusFlag';
import { Footer } from '../components/Footer';

export function Canvas() {
	return (
		<div className="min-h-screen bg-[url(/new_studs.png)] bg-[length:256px_256px] bg-repeat bg-center">
			<div>
				<OrpheusFlag />
			</div>
			<div className="inline justify-center items-center mt-4 font-extrabold">
				<div className="flex justify-center items-center align-middle mb-8">
					<img
						src="/bricklayer-logo.png"
						alt=""
						className="w-full max-w-xl"
					></img>
					<h1
						className="text-6xl text-red-500/80 drop-shadow-black"
						style={{
							WebkitTextStroke: '1px white',
							paintOrder: 'stroke fill'
						}}
					>
						Canvas
					</h1>
				</div>
			</div>
			<div className="flex flex-1">
				<main className="flex-1 flex items-center justify-center p-8">
					<div
						className="bg-[url(/universal_bright_white.png)] bg-[length:256px_256px] bg-repeat bg-center border-4 border-black rounded-lg shadow-2xl"
						style={{
							width: '640px',
							height: '640px'
						}}
					>

					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}