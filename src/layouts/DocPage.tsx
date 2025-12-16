interface Properties {
	Content: any;
	SideBar: any;
}

export function DocPage({ Content, SideBar }: Properties) {
	return (
		<div
			className="flex flex-col min-h-screen bg-repeat bg-center"
			style={{
				backgroundImage: 'url(/universal_bright_white.png)',
				backgroundSize: '512px 512px'
			}}
		>
			<div className="flex flex-1">
				<aside className="hidden sm:block w-48 fixed h-full">
					<SideBar />
				</aside>
				<main className="backdrop-blur-sm text-black flex-1 p-8 prose-ul:list-disc prose-ul:font-medium prose-ol:list-decimal prose-ol:font-medium prose-base prose-p:font-medium prose-headings:my-1 prose-headings:font-semibold prose-a:text-blue-600 prose-a:hover:underline prose-a:hover:text-blue-800 mx-auto sm:ml-48">
					<Content />
				</main>
			</div>
		</div>
	);
}