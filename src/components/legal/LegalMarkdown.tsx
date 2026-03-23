import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function LegalMarkdown({ content }: Props) {
  return (
    <article className="legal-doc">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
