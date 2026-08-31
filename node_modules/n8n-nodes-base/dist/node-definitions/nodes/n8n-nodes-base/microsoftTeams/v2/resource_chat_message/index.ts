/**
 * Microsoft Teams - ChatMessage Resource
 * Re-exports all operation types for this resource.
 */

import type { MicrosoftTeamsV2ChatMessageCreateNode } from './operation_create';
import type { MicrosoftTeamsV2ChatMessageGetNode } from './operation_get';
import type { MicrosoftTeamsV2ChatMessageGetAllNode } from './operation_get_all';
import type { MicrosoftTeamsV2ChatMessageSendAndWaitNode } from './operation_send_and_wait';

export * from './operation_create';
export * from './operation_get';
export * from './operation_get_all';
export * from './operation_send_and_wait';

export type MicrosoftTeamsV2ChatMessageNode =
  | MicrosoftTeamsV2ChatMessageCreateNode
  | MicrosoftTeamsV2ChatMessageGetNode
  | MicrosoftTeamsV2ChatMessageGetAllNode
  | MicrosoftTeamsV2ChatMessageSendAndWaitNode
  ;