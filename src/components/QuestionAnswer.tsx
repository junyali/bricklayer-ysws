interface Properties {
	question: string;
	answer: string;
}
export function QuestionAnswer({ question, answer }: Properties) {
	return (
		<div className="mb-8 last:mb-0">
			<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3">
				{question}
			</h3>
			<p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
				{answer}
			</p>
		</div>
	);
}