import React, { FC, ClassAttributes, createElement, useContext } from 'react';
import ColorTool from '../../components/ColorTool';
import { context as StateContext } from '../../context/state';

const ThemeEditor: FC<ClassAttributes<HTMLElement>> = () => {
  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      <ColorTool />
    </>
  );
};

export default ThemeEditor;
