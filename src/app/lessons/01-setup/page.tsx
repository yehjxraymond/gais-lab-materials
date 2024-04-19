import { TestChatCompletion } from "@/components/lessons/01-setup/TestChatCompletion";
import Markdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestEmbedding } from "@/components/lessons/01-setup/TestEmbedding";
import { TestDatabase } from "@/components/lessons/01-setup/TestDatabase";

const instructionsContent = `
# Lab 1: Setting up your lab environment

## Background

Welcome to Lab 1 of the Generative AI Solutioning (GAIS) course. In this lab, you will establish your lab environment, which is pivotal for your progress in this course. You will connect to three different services necessary for developing generative AI applications. 

Navigate to the different tabs to understand the setup and demo for each service.
`;

const llmContent = `
## Setting up LLM

- [OpenRouter](https://openrouter.ai/): A service that provides access to various language models (LLMs) through an API interface similar to OpenAI's API.
- [LangChain](https://js.langchain.com/docs/get_started/introduction): A middleware library that allows you to connect to different LLMs and switch between them easily without changing your code.
- Environment Variables: A way to store sensitive information like API keys securely outside of your codebase.
- API Keys: Unique identifiers used to authenticate and authorize access to APIs.

## Task

1. **Set up API Key for Frontend**:
   - Find the \`.env\` file in your project, copy from \`.env.example\` if you don't already have a copy.
   - Generate a random, secure string for the \`GLOBAL_API_KEY\` field.
   - This key will be used by the frontend to interact with your backend services.

2. **Set up OpenRouter API Key**:
   - Register for an account on OpenRouter.
   - After verifying your account, log in and navigate to your profile.
   - Create a new API key.
   - Store this key securely in your local environment.
   - Add the key to the \`OPENROUTER_API_KEY\` field in your \`.env\` file.

3. **Load GLOBAL_API_KEY onto your frontend application**:
   - Open the frontend application and set the API key in cog on the top right.
   - Make sure you use the \`GLOBAL_API_KEY\` and not the OpenRouter API key.
   - The API key will be used to authenticate with the server.
   - API Key is stored in the local storage of the browser and automatically saved.

4. **Run the LLM Demo Application in the LLM Demo Tab**:
   - With the API keys set up, you can now run the application.
   - The LLM demo will prompt you with a default message: "Tell me a joke about generative AI."
   - Feel free to change the message and observe the stateless interaction with the LLM.

## Files of Interest

\`src/app/api/lessons/config.ts\`
- This file holds the configuration information for your server.
- It declares the OpenRouter model and the Hugging Face Embedding model used by other files.

\`.env.example\`
- This file serves as an example of the required environment variables.
- Copy its contents to the \`.env\` file and replace the values with your own.

\`.env\`
- This file stores your sensitive environment variables, such as API keys.
- It is explicitly declared in the \`.gitignore\` file to prevent accidental commits.

\`src/app/api/lessons/01-setup/llm/route.ts\`
- This file is responsible for specifying the server routes and logic.
- It includes API key validation, handling requests, invoking the chat model, and sending responses.
`;

const embeddingContent = `
## Setting up Embedding

In the previous part of Lab 1, you set up the Language Model (LLM) service using OpenRouter. In this part, you will configure the Embeddings Model, which is a crucial component for semantic search and understanding the meaning behind text data.

We will be using the Hugging Face Inference API, which provides free access to various pre-trained models, including the Sentence Transformer (all-MiniLM-L6-v2) model for generating text embeddings.

## Task

1. **Register for a Hugging Face Account**:
   - Go to [huggingface.co](https://huggingface.co/) and create a new account.
   - Verify your email address to activate your account.

2. **Deploy the Sentence Transformer Model**:
   - Navigate to the [Sentence Transformer (all-MiniLM-L6-v2) model page](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
   - Click on the "Deploy" button.
   - Under the "Inference API" section, click on "New Access Token" to generate a new token.
   - Copy the generated token and store it securely in your local environment.

3. **Update the Environment Variables**:
   - Open your \`.env\` file.
   - Add the Hugging Face access token to the \`HUGGING_FACE_API_KEY\` field.

4. **Restart the Application**:
   - Restart your application to apply the new environment variables.

5. **Test the Embeddings Endpoint**:
   - Open the Embeddings Demo tab in your application.
   - You should see a default message about generative AI.
   - Click the "Send" button to generate the embeddings for the provided text.
   - The API should return a 384-dimensional vector representation of the input text.

## Files of Interest

\`src/app/api/lessons/config.ts\`
- This file contains the configuration for the Hugging Face Embeddings Model (MiniLM-L6).

\`src/app/api/lessons/01-setup/embedding/route.ts\`
- This file handles the server routes and logic for the Embeddings endpoint.
- It includes API key validation, handling requests, invoking the embeddings model, and sending responses.

\`src/components/lessons/01-setup/useEmbedding.tsx\`
- This file contains a React hook (\`useEmbeddings\`) that sends a POST request to the backend Embeddings endpoint.
- It uses the authenticated Axios helper to authenticate the request with the API key.

\`src/components/lessons/01-setup/TestEmbedding.tsx\`
- This file contains the UI component for testing the Embeddings endpoint.
`;

const databaseContent = `
## Setting up Database

- [SupaBase](https://supabase.com/): A service that provides a Postgres database compatible with vector storage and search.
- Vector Storage: The ability to store and retrieve vector embeddings within a database.
- Semantic Search: The process of finding semantically similar documents based on their vector embeddings.

## Task

1. **Set up SupaBase Account**:
   - Register for a free account on SupaBase.
   - Create a new project for the Singapore region.
   - Navigate to the project settings and copy the Postgres database URL (use the endpoint for transactional connection pooling).

2. **Configure Database URL**:
   - In your \`.env\` file, add the Postgres database URL to the \`DATABASE_URL\` field.
   - Replace the password portion of the URL with a secure password of your choice.
   - Append \`?pgbouncer=true\` to the end of the URL to enable connection pooling.

3. **Run the Database Demo Application in the DB Demo Tab**:
   - With the database URL set up, you can now run the application.
   - The DB demo will initially show an empty table.
   - Load some sample documents into the database by clicking the "Load Documents" button.
   - Perform a semantic search by entering a new document and clicking the "Search Documents" button.
   - Adjust the number of documents to return using the provided input field.

## Files of Interest

\`.env\`
- This file stores your sensitive environment variables, such as API keys and database URLs.
- It is explicitly declared in the \`.gitignore\` file to prevent accidental commits.

\`src/app/api/lessons/01-setup/database/route.ts\`
- This file handles the GET request for retrieving documents from the database.
- It uses Prisma to fetch and return the documents.
- This file also handles the POST request for creating a new document in the database.
- It uses Prisma to create the document and store its embedding vector.

\`src/app/api/lessons/01-setup/database/[documentId]/route.ts\`
- This file handles the DELETE request for removing a document from the database.
- It uses Prisma to delete the specified document.

\`src/app/api/lessons/01-setup/database/similar/route.ts\`
- This file handles the POST request for performing a semantic search on the database.
- It uses the vector store to find semantically similar documents based on the provided input.

\`src/components/lessons/01-setup/TestDatabase.tsx\`
- This file contains the user interface for interacting with the database demo.
- It provides input fields and buttons for loading documents, creating new documents, and performing semantic searches.

\`src/components/lessons/01-setup/useDocument.tsx\`
- This file contains a custom React hook for managing document data.
- It uses React Query to handle data fetching, mutations, and caching.
- It provides functions for loading documents, creating new documents, and deleting documents.`;

const llmSetupTab = "llm-setup";
const llmDemo = "llm-demo";
const embeddingSetupTab = "embedding-setup";
const embeddingDemo = "embedding-demo";
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
          <TabsTrigger value={embeddingSetupTab}>
            Setup Embedding (HuggingFace)
          </TabsTrigger>
          <TabsTrigger value={embeddingDemo}>Embedding Demo</TabsTrigger>
          <TabsTrigger value={dbSetupTab}>Setup DB (Supabase)</TabsTrigger>
          <TabsTrigger value={dbDemo}>DB Demo</TabsTrigger>
        </TabsList>
        <TabsContent value={llmSetupTab}>
          <Markdown className="max-w-3xl">{llmContent}</Markdown>
        </TabsContent>
        <TabsContent value={llmDemo}>
          <TestChatCompletion />
        </TabsContent>

        <TabsContent value={embeddingSetupTab}>
          <Markdown className="max-w-3xl">{embeddingContent}</Markdown>
        </TabsContent>
        <TabsContent value={embeddingDemo}>
          <TestEmbedding />
        </TabsContent>

        <TabsContent value={dbSetupTab}>
          <Markdown className="max-w-3xl">{databaseContent}</Markdown>
        </TabsContent>
        <TabsContent value={dbDemo}>
          <TestDatabase />
        </TabsContent>
      </Tabs>
    </div>
  );
}
