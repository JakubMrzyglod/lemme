import { FormItem } from '@jakubmrzyglod/react-hook-form';
import { FC } from 'react';
import { HandleRowProps } from '../../types';
import { HandleRowButton } from './button';

export const HandleRow: FC<HandleRowProps> = ({
  itemsCount,
  index,
  append,
  remove,
}) => {
  const isLastItem = index + 1 === itemsCount;
  const partialButtonProps = isLastItem
    ? { onClick: () => append({}), text: '+' }
    : { onClick: () => remove(index), text: '-' };
  const buttonProps = { ...partialButtonProps, isLastItem };
  return (
    <FormItem {...{ xs: 1 }}>
      <HandleRowButton {...buttonProps} />
    </FormItem>
  );
};
