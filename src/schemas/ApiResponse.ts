import { z } from "zod";
// ... outros imports

// O Schema Zod (o VALOR)
export const ApiResponse = z.object({
  // ... sua estrutura de ApiResponse ...
  type: z.string(), // ou z.nativeEnum se preferir
  message: z.string(),
  data: z.any().optional(),
});

// O Tipo TypeScript (inferido do valor)
export type ApiResponse = z.infer<typeof ApiResponse>;