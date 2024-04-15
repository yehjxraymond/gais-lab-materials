import { MainNavigation } from "@/components/MainNavigation";
import Markdown from "react-markdown";

const content = `
# Generative AI Solutioning (GAIS)

Welcome blah blah blah
`;

export default function Page() {
  return (
    <main className="container p-12">
      <MainNavigation />
      <div className="prose max-w-full mt-12">
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
}
