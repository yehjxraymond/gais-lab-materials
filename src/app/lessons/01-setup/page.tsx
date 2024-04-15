import Markdown from "react-markdown";

const content = `
# Lab 1: Setting up your environment

Blah blah blah

`;

export default function Page() {
  return (
    <div className="prose max-w-full mt-12">
      <Markdown>{content}</Markdown>
    </div>
  );
}
