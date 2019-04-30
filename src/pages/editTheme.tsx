import React, { FC, ClassAttributes, createElement } from 'react';
import ColorTool from '../components/ColorTool';
import Layout from '../layouts/Layout';

const EditThemePage: FC<ClassAttributes<HTMLElement>> = () => {
  return (
    <Layout>
      <ColorTool />
    </Layout>
  );
};

export default EditThemePage;
