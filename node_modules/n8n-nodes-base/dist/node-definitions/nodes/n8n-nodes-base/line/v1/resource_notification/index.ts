/**
 * Line - Notification Resource
 * Re-exports all operation types for this resource.
 */

import type { LineV1NotificationSendNode } from './operation_send';

export * from './operation_send';

export type LineV1NotificationNode = LineV1NotificationSendNode;