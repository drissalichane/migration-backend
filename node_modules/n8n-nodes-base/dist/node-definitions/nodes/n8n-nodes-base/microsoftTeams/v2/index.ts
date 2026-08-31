/**
 * Microsoft Teams Node - Version 2
 * Re-exports all discriminator combinations.
 */

import type { MicrosoftTeamsV2ChannelNode } from './resource_channel';
import type { MicrosoftTeamsV2ChannelMessageNode } from './resource_channel_message';
import type { MicrosoftTeamsV2ChatMessageNode } from './resource_chat_message';
import type { MicrosoftTeamsV2TaskNode } from './resource_task';

export * from './resource_channel';
export * from './resource_channel_message';
export * from './resource_chat_message';
export * from './resource_task';

export type MicrosoftTeamsV2Node =
  | MicrosoftTeamsV2ChannelNode
  | MicrosoftTeamsV2ChannelMessageNode
  | MicrosoftTeamsV2ChatMessageNode
  | MicrosoftTeamsV2TaskNode
  ;