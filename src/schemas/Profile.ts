import { roleNames } from "@/enums/roles";
import { z } from "zod";

export const Profile = z.nativeEnum(roleNames);

export type Profile = z.infer<typeof Profile>;
