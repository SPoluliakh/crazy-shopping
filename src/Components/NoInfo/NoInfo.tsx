import React from 'react';
import * as SC from './NoInfo.styled';
import Gif from './pulp-fiction-john-travolta.gif';

interface IProps {
  children?: React.ReactNode;
}

export const NoInfo = ({ children = '' }: IProps) => {
  return (
    <SC.Wrap>
      <SC.Image src={Gif} alt="no info" />
      <p>{children}</p>
    </SC.Wrap>
  );
};
