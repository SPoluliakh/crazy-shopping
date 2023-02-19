import * as SC from './CustomLink.styled';
import React from 'react';

interface IStateType {
  from: { pathname: string };
}
interface IProps {
  children: React.ReactNode;
  to: string;
  state?: IStateType;
}

export const CustomLink = ({ children, to, state }: IProps) => {
  return (
    <>
      <SC.Link to={to} state={state}>
        {children}
      </SC.Link>
    </>
  );
};
