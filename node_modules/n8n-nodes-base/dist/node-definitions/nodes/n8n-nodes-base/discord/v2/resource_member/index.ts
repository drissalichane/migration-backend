/**
 * Discord - Member Resource
 * Re-exports all operation types for this resource.
 */

import type { DiscordV2MemberGetAllNode } from './operation_get_all';
import type { DiscordV2MemberRoleAddNode } from './operation_role_add';
import type { DiscordV2MemberRoleRemoveNode } from './operation_role_remove';

export * from './operation_get_all';
export * from './operation_role_add';
export * from './operation_role_remove';

export type DiscordV2MemberNode =
  | DiscordV2MemberGetAllNode
  | DiscordV2MemberRoleAddNode
  | DiscordV2MemberRoleRemoveNode
  ;