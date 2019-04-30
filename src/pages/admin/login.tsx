import React, { FC, ClassAttributes, createElement, useEffect } from 'react';
import styled from '@emotion/styled';
import Layout from '../../layouts/Layout';
import netflifyIdentity from 'netlify-identity-widget';

const Login: FC<ClassAttributes<HTMLElement>> = () => {
  useEffect(() => {
    netflifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
    netflifyIdentity.open();
  });

  return (
    <Layout>
      <div id="netlify-modal" />
    </Layout>
  );
};

export default Login;
