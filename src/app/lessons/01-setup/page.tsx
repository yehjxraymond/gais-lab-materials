import { TestChatCompletion } from "@/components/lessons/01-setup/TestChatCompletion";
import Markdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const instructionsContent = `
# Lab 1: Setting up your lab environment

In this lab we will be setting up your lab environment. This will include connecting a LLM and a database to your server as well as protecting access to them with an API Key.
`;

const llmContent = `
## Setting up LLM

We will be using LangChain as a common interface to access the different LLMs. This will allow us to easily switch between different LLMs without changing our code.

## Files of interest

\`src/app/api/lessons/config.ts\`
This is the config file for your server. It contains the configuration for the LLM and the API Key. You can see an OpenRouter model being defined there using an API key from the environment variables.

\`.env\`
This is your environment file. You can set your API key here. You can also set the API key in the environment variables of your server.

\`.env.example\`
This is an example environment file. You can copy this file to \`.env\` and set your API key there.

\`src/app/api/lessons/01-setup/route.ts\`
This is the server endpoint that enables the access to the LLM. You can see that it is doing the following:
- Validating the API Key
- Getting the message from the request body
- Invoking the model with the message, through LangChain's API
- Returning the response back to the client
`;

const llmDemoContent = `
## LLM Demo

Once you have set up the LLM on the server, you can set the same API Key on the browser to authenticate with the server. Click on the cog icon on the top right corner of the page and set the API Key there. You can then test the LLM by sending a message to the bot.
`;

const llmSetupTab = "llm-setup";
const llmDemo = "llm-demo";
const dbSetupTab = "db-setup";
const dbDemo = "db-demo";

export default function Page() {
  return (
    <div className="prose max-w-full mt-12">
      <Markdown className="max-w-3xl">{instructionsContent}</Markdown>
      <Tabs defaultValue={llmSetupTab}>
        <TabsList>
          <TabsTrigger value={llmSetupTab}>Setup LLM (OpenRouter)</TabsTrigger>
          <TabsTrigger value={llmDemo}>LLM Demo</TabsTrigger>
          <TabsTrigger value={dbSetupTab}>Setup DB (Supabase)</TabsTrigger>
          <TabsTrigger value={dbDemo}>DB Demo</TabsTrigger>
        </TabsList>
        <TabsContent value={llmSetupTab}>
          <Markdown className="max-w-3xl">{llmContent}</Markdown>
        </TabsContent>
        <TabsContent value={llmDemo}>
          <Markdown className="max-w-3xl">{llmDemoContent}</Markdown>
          <TestChatCompletion />
        </TabsContent>
        <TabsContent value={dbSetupTab}>
          <Markdown className="max-w-3xl">{`## TBD`}</Markdown>
        </TabsContent>
        <TabsContent value={dbDemo}>
          <Markdown className="max-w-3xl">{`## TBD`}</Markdown>
        </TabsContent>
      </Tabs>
    </div>
  );
}
