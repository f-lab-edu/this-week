import React from 'react';
import useAxiosInstance from 'customs/useAxiosInstance';
import { ChildrenProps } from 'types/props';

const AxiosContainer = ({ children }: ChildrenProps) => {
  useAxiosInstance();

  return <>{children}</>;
};

export default AxiosContainer;
