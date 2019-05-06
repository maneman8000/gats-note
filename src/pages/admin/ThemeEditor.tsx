import * as React from 'react';
import { FC, ClassAttributes } from 'react';
import ColorTool from '../../components/ColorTool';

const ThemeEditor: FC<ClassAttributes<HTMLElement>> = () => {
  return (
    <>
      <ColorTool />
    </>
  );
};

export default ThemeEditor;
