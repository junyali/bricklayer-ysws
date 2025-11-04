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
				<main className="backdrop-blur-xs text-black flex-1 p-8 prose-ul:list-disc prose-ol:list-decimal prose-base prose-p:font-medium prose-headings:my-1 prose-headings:font-semibold mx-auto sm:ml-48">
					<Content />
				</main>
			</div>
		</div>
	);
}