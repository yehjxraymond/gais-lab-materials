import {
  withRequestValidation
} from "../../../validation";
import { prisma } from "../../../prisma";

export const DELETE = withRequestValidation<{ params: { documentId: string } }>(
  async (_, context) => {
    const result = await prisma.document.delete({
      where: { id: context.params.documentId },
    });
    return Response.json(result);
  }
);
