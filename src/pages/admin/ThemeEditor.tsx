import React, { FC, ClassAttributes, createElement } from 'react';
import ColorTool from '../../components/ColorTool';
import Layout from '../../layouts/Layout';

const ThemeEditor: FC<ClassAttributes<HTMLElement>> = () => {
  return (
    <>
      <ColorTool />
    </>
  );
};

export default ThemeEditor;
