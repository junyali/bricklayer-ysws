interface Properties {
	Content: any;
	SideBar: any;
}

export function DocPage({ Content, SideBar }: Properties) {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-1">
				<aside className="hidden sm:block w-48 fixed h-full">
					<SideBar />
				</aside>
				<main className="flex-1 p-8 prose-ul:list-disc prose-ol:list-decimal prose-sm prose-headings:my-2 prose-headings:font-semibold max-w-4xl mx-auto sm:ml-48">
					<Content />
				</main>
			</div>
		</div>
	);
}