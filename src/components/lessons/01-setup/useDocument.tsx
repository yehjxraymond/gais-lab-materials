import { authenticatedAxios } from "@/lib/authenticatedAxios";
import { betterAxiosError } from "@/lib/betterAxiosError";
import { useMutation, useQuery } from "@tanstack/react-query";

interface DocumentSimilarity {
  pageContent: string;
  metadata: {
    id: string;
    content: string;
    _distance: number;
  };
}

type DocumentSimilarityArrayItem = [DocumentSimilarity, number];

type DocumentSimilarityResponse = DocumentSimilarityArrayItem[];

interface DocumentResponse {
  id: string;
  content: string;
}

const createDocument = betterAxiosError(async (body: { document: string }) => {
  const { data } = await authenticatedAxios.post<DocumentResponse>(
    "/api/lessons/01-setup/database",
    body
  );
  return data;
});

const deleteDocument = betterAxiosError(async (id: string) => {
  return await authenticatedAxios.delete(
    `/api/lessons/01-setup/database/${id}`
  );
});

const listDocuments = betterAxiosError(async () => {
  const { data } = await authenticatedAxios.get<{
    documents: DocumentResponse[];
  }>("/api/lessons/01-setup/database");
  return data;
});

const searchDocuments = betterAxiosError(
  async (body: { document: string; k?: number }) => {
    const { data } = await authenticatedAxios.post<DocumentSimilarityResponse>(
      "/api/lessons/01-setup/database/similar",
      body
    );
    return data;
  }
);

export const useDocument = () => {
  const listDocumentQuery = useQuery({
    queryFn: listDocuments,
    queryKey: ["listDocuments"],
  });
  const createDocumentMutation = useMutation({
    mutationFn: createDocument,
  });
  const searchDocumentMutation = useMutation({
    mutationFn: searchDocuments,
  });
  const deleteDocumentMutation = useMutation({
    mutationFn: deleteDocument,
  });

  return {
    listDocumentQuery,
    createDocumentMutation,
    deleteDocumentMutation,
    searchDocumentMutation,
  };
};
