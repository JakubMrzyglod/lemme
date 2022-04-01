import { useFormContext } from '@jakubmrzyglod/react-hook-form';
import { useEffect } from 'react';
import { useOrgContext } from '../../../../../../../common/org';
import { INV_NUM_REGEX } from '../../constants';

export const useInvoiceNumberSetter = () => {
  const { settings } = useOrgContext();
  const { watch, setValue, getValues } = useFormContext();
  const createdAt = watch('createdAt', new Date());
  const numSign = getSignature(createdAt);
  const count = settings.invoiceCount?.[numSign] ?? 0;
  const setNum = () => setValue('num', `${count + 1}-${numSign}`);

  useEffect(() => {
    const num = getValues('num');
    if (!num || num.match(INV_NUM_REGEX)) {
      setNum();
    }
  }, [createdAt]);

  useEffect(() => {
    setNum();
  }, [settings]);
};

const getSignature = (date = new Date()) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}-${year}`;
};
