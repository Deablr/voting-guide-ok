import type { StateQuestion as StateQuestionType } from "@/data/ballot"

type StateQuestionProps = {
  question: StateQuestionType
}

export function StateQuestion({ question }: StateQuestionProps) {
  const paragraphs = question.text.split("|")

  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground"
      aria-labelledby={`question-${question.id}`}
    >
      <div className="border-b border-border bg-muted px-4 py-3">
        <h3
          id={`question-${question.id}`}
          className="text-lg font-bold text-foreground"
        >
          {question.title}
          {question.subtitle && (
            <span className="block text-base font-semibold">
              {question.subtitle}
            </span>
          )}
        </h3>
        <div className="mt-2 space-y-2 text-sm text-foreground">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="px-4 py-3">
        <ul
          className="list-none space-y-2"
          role="group"
          aria-label={`Choices for ${question.title}${question.subtitle ? ` ${question.subtitle}` : ""}`}
        >
          {question.choices.map((choice) => (
            <li key={choice} className="font-medium text-foreground">
              {choice}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
