export const BASE_NAME = 'items';

export const SUMMARY_PROPS = {
  NET: { watchFieldNames: ['quantity', 'price'], label: 'Net' },
  GROSS: { watchFieldNames: ['quantity', 'price', 'tax'], label: 'Gross' },
};
