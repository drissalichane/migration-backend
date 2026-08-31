/**
 * Slack - Message Resource
 * Re-exports all operation types for this resource.
 */

import type { SlackV21MessageDeleteNode } from './operation_delete';
import type { SlackV21MessageGetPermalinkNode } from './operation_get_permalink';
import type { SlackV21MessagePostNode } from './operation_post';
import type { SlackV21MessageSearchNode } from './operation_search';
import type { SlackV21MessageSendAndWaitNode } from './operation_send_and_wait';
import type { SlackV21MessageUpdateNode } from './operation_update';

export * from './operation_delete';
export * from './operation_get_permalink';
export * from './operation_post';
export * from './operation_search';
export * from './operation_send_and_wait';
export * from './operation_update';

export type SlackV21MessageNode =
  | SlackV21MessageDeleteNode
  | SlackV21MessageGetPermalinkNode
  | SlackV21MessagePostNode
  | SlackV21MessageSearchNode
  | SlackV21MessageSendAndWaitNode
  | SlackV21MessageUpdateNode
  ;