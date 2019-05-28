import React from 'react';
import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <React.Fragment key="polyfill-script">
      <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
    </React.Fragment>,
  ]);
};
