import { roleNames, roles } from "@/enums/roles";
import { Role, RoleId } from "@/schemas/Role";

type RoleKeys = keyof typeof roles;

export function getRole(roleId: RoleId): Role {
  const key: RoleKeys = Object.keys(roles)[Object.values(roles).indexOf(roleId)] as RoleKeys;

  return {
    id: roles[key],
    name: roleNames[key],
  };
}
