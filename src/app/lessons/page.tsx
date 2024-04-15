import Markdown from "react-markdown";

const content = `
# Lesson Plan

- [Lab 1: Setting up your environment](/lessons/01-setup)

`;

export default function Page() {
  return (
    <div className="prose max-w-full mt-12">
      <Markdown>{content}</Markdown>
    </div>
  );
}
