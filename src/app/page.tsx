import { MainNavigation } from "@/components/MainNavigation";
import Markdown from "react-markdown";

const content = `
# Generative AI Solutioning (GAIS)

This repository serve as a starter kit for you to build your AI application on. In addition to that, you will be using this throughout the entire lesson as the lab materials are all in this repository as well.

## Lessons

Visit the \`Lessons\` section in the navigation to see the list of lessons available and follow through the labs.
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
