"use client";

import { FunctionComponent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { BotMessageSquare, Cog } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocalForage } from "@/hooks/useLocalForage";
import { API_KEY_NAME } from "@/lib/authenticatedAxios";
import { Input } from "@/components/ui/input";

export const ApiKeySettings: FunctionComponent = () => {
  const { value: apiKey, set: setApiKey } = useLocalForage(API_KEY_NAME, null);

  return (
    <Dialog>
      <DialogTrigger>
        <Cog className="w-5 h-5 text-foreground/60" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>API Key Settings</DialogTitle>
          <DialogDescription>
            <div className="my-4">
              An API Key is used to protect access to valuable resources like
              your data and LLM usage. The key is to be set on the{" "}
              <span className="font-semibold">.env</span> file on the server.
              Enter the same API key below to access protected resources. This
              key will be stored on the browser. Key is automatically saved on
              change.
            </div>
            <Input
              placeholder="api-key"
              value={apiKey || ""}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
