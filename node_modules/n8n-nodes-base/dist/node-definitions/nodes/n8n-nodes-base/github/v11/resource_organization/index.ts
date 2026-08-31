/**
 * GitHub - Organization Resource
 * Re-exports all operation types for this resource.
 */

import type { GithubV11OrganizationGetRepositoriesNode } from './operation_get_repositories';

export * from './operation_get_repositories';

export type GithubV11OrganizationNode = GithubV11OrganizationGetRepositoriesNode;