import { QuestionAnswer } from './QuestionAnswer';
import { faqData } from '../data/faq';

export function FAQ() {
	return (
		<>
			{faqData.map((faq, index) => (
				<QuestionAnswer
					key={index}
					question={faq.question}
					answer={faq.answer}
				/>
			))}
		</>
	);
}