import React from 'react';
import './index.css';
import App from './App';
import { ProviderWrapper } from './ProviderWrapper';

export const AppWrapper = Story =>
  ProviderWrapper(
    <App>
      <Story />
    </App>,
  );
