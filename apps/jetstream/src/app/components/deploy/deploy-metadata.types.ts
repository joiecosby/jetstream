import { ListMetadataResult } from '@jetstream/types';

export type DeployMetadataStatus = 'idle' | 'submitting' | 'preparing' | 'adding';

type Common = 'common';
type User = 'user';
type All = 'all';

export type CommonUser = Common | User;
export type AllUser = All | User;

export interface SalesforceUser {
  Id: string;
  Name: string;
  FirstName: string;
  LastName: string;
  Username: string;
  IsActive: boolean;
}

export interface ChangeSetPackage {
  Id: string;
  Name: string;
  Description: string;
  IsManaged: boolean;
  Source: string;
  Status: 'ACTIVE' | 'PUBLISHED' | 'LOCKED' | 'DELETED' | 'INSTALLED';
}

export interface DeployMetadataTableRow {
  key: string;
  type: string;
  typeLabel: string;
  fullName?: string;
  folder: string;
  lastRefreshed: string;
  lastModifiedByName?: string;
  lastModifiedDate?: Date;
  createdByName?: string;
  createdDate?: Date;
  loading: boolean;
  error: boolean;
  metadata?: ListMetadataResult;
}