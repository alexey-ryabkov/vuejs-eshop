import { z } from "zod";

export const statusMessageSchema = z.object({
  message: z.string(),
});
