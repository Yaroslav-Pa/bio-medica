function QuestionAnswer({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <article className='flex flex-col gap-3 pl-3 border-l-2'>
      <p className='text-large'>&#x2022; {question}</p>
      <p className='ml-7 text-large max-w-[1000px]'>{answer}</p>
    </article>
  );
}

export default QuestionAnswer;
