import { FC } from 'react';
import { BodyProps } from '../../types';
import { BodyBox, BodyItem } from './styled';

export const Body: FC<BodyProps> = ({ body }) => (
  <>
    {body.map((row) => (
      <BodyBox>
        {row.map(({ text, ...sizes }) => (
          <BodyItem {...sizes}>{text}</BodyItem>
        ))}
      </BodyBox>
    ))}
  </>
);
