export const REGION = 'europe-west3';

export enum FsColl {
  ORGANIZATIONS = 'organizations',
  INVOICES = 'invoices',
}

export const fsPath = {
  [FsColl.ORGANIZATIONS]: (orgId?: string) =>
    `${FsColl.ORGANIZATIONS}${addIdIfExists(orgId)}`,
  [FsColl.INVOICES]: (orgId: string, invoiceId?: string) =>
    `${FsColl.ORGANIZATIONS}/${orgId}/${FsColl.INVOICES}${addIdIfExists(
      invoiceId
    )}`,
};

const addIdIfExists = (id?: string) => {
  return id ? `/${id}` : '';
};

export enum FsDocKeyName {
  ORGANIZATION = 'ownerUid',
  INVOICE = 'invoiceId',
}

const addBrackets = <T extends Array<string>>(...args: T): T => {
  return args.map((arg) => `{${arg}}`) as T;
};

export const FsTriggerPath: Record<FsColl, string> = {
  [FsColl.ORGANIZATIONS]: fsPath[FsColl.ORGANIZATIONS](
    ...addBrackets(FsDocKeyName.ORGANIZATION)
  ),
  [FsColl.INVOICES]: fsPath.invoices(
    ...addBrackets(FsDocKeyName.ORGANIZATION, FsDocKeyName.INVOICE)
  ),
};
