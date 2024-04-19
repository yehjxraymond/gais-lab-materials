"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Terminal } from "lucide-react";
import { FunctionComponent, useState } from "react";
import { useEmbedding } from "./useEmbedding";

const DEFAULT_MESSAGE =
  "Generative artificial intelligence is artificial intelligence capable of generating text, images, videos, or other data using generative models, often in response to prompts.";

export const TestEmbedding: FunctionComponent = () => {
  const { data, error, isPending, mutate } = useEmbedding();
  const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);

  const handleSendMessage = () => {
    mutate({ message });
  };

  return (
    <div className="max-w-2xl space-y-2 p-2 border rounded-md mt-8">
      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
      {data && (
        <Alert>
          <AlertTitle>
            <Terminal className="h-4 w-4 inline-block" /> Response
          </AlertTitle>
          <AlertDescription>
            <pre className="whitespace-pre-line">
              {JSON.stringify(data.embedding)}
            </pre>
          </AlertDescription>
        </Alert>
      )}
      <Input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSendMessage} disabled={isPending}>
        Send
      </Button>
    </div>
  );
};
