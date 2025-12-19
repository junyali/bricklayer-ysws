import { Separator } from '../components/Separator';
import { Footer } from '../components/Footer';

interface Properties {
	Content: any;
	SideBar: any;
}

export function DocPage({ Content, SideBar }: Properties) {
	return (
		<div
			className="flex flex-col min-h-screen bg-[url(/universal_bright_white.png)] bg-[length:512px_512px] bg-repeat bg-center"
		>
			<div className="flex flex-1">
				<aside className="hidden sm:block w-48 fixed h-full">
					<SideBar />
				</aside>
				<main className="bg-[url(/new_studs.png)] bg-[length:512px_512px] brightness-110 text-black flex-1 sm:ml-48">
					<div className="p-8 prose-ul:list-disc prose-ul:font-medium prose-ol:list-decimal prose-ol:font-medium prose-base prose-p:font-medium prose-headings:my-1 prose-headings:font-semibold prose-a:text-blue-600 prose-a:hover:underline prose-a:hover:text-blue-800 mx-auto">
						<Content />
					</div>
					<Separator />
					<Footer />
				</main>
			</div>
		</div>
	);
}