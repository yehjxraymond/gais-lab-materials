"use client";

import { FunctionComponent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChatCompletion } from "./useChatCompletion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const DEFAULT_MESSAGE = "Tell me a joke about Generative AI";

export const TestChatCompletion: FunctionComponent = () => {
  const { data, error, isPending, mutate } = useChatCompletion();
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
            <pre className="whitespace-pre-line">{data.content}</pre>
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
