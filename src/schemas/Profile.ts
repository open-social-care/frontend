import { profiles } from "@/enums/profiles";
import { z } from "zod";

export const Profile = z.nativeEnum(profiles);

export type Profile = z.infer<typeof Profile>;
