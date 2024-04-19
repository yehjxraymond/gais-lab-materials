"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FunctionComponent, useState } from "react";
import { useDocument } from "./useDocument";

const DEFAULT_MESSAGE =
  "Generative artificial intelligence is artificial intelligence capable of generating text, images, videos, or other data using generative models, often in response to prompts.";
const DEFAULT_QUERY =
  "Fundamental areas of computer science Computer science is the study of computation, information, and automation. Computer science spans theoretical disciplines to applied disciplines.";

export const TestDatabase: FunctionComponent = () => {
  const {
    listDocumentQuery,
    deleteDocumentMutation,
    createDocumentMutation,
    searchDocumentMutation,
  } = useDocument();
  const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [numQuery, setNumQuery] = useState<number>(1);

  const { data: documentList } = listDocumentQuery;
  const { data: searchResult } = searchDocumentMutation;

  const deleteDocument = async (id: string) => {
    await deleteDocumentMutation.mutateAsync(id);
    listDocumentQuery.refetch();
  };

  const createDocument = async () => {
    await createDocumentMutation.mutateAsync({ document: message });
    listDocumentQuery.refetch();
  };

  const searchDocument = async () => {
    await searchDocumentMutation.mutateAsync({ document: query, k: numQuery });
  };

  return (
    <div className="p-4 border rounded-md mt-8">
      <h2 className="text-xl">Create & View Documents Stored in Database</h2>
      {documentList && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">id</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentList.documents.map((document) => (
              <TableRow key={document.id}>
                <TableCell className="font-medium">{document.id}</TableCell>
                <TableCell>{document.content}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteDocument(document.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="flex space-x-2">
        <Input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          onClick={createDocument}
          disabled={createDocumentMutation.isPending}
        >
          Load Document
        </Button>
      </div>
      <h2 className="text-xl mt-10">
        Search for semantically similar document
      </h2>
      <div className="flex space-x-2">
        <Input
          placeholder="Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Input
          type="number"
          className="w-16"
          placeholder="Query"
          value={numQuery}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return;
            setNumQuery(Number(e.target.value));
          }}
        />
        <Button
          onClick={searchDocument}
          disabled={searchDocumentMutation.isPending}
        >
          Search Document
        </Button>
      </div>
      {searchResult && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">id</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Distance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchResult.map((result) => {
              const [document, distance] = result;
              return (
                <TableRow key={document.metadata.id}>
                  <TableCell className="font-medium">
                    {document.metadata.id}
                  </TableCell>
                  <TableCell>{document.pageContent}</TableCell>
                  <TableCell>{distance}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
