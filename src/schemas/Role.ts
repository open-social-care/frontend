import { roles } from "@/enums/roles";
import { z } from "zod";
import { Profile } from "./Profile";

export const RoleId = z.nativeEnum(roles);
export type RoleId = z.infer<typeof RoleId>;

export const Role = z.object({ id: RoleId, name: Profile });
export type Role = z.infer<typeof Role>;
