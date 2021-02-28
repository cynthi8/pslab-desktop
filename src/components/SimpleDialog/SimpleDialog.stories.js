import React from 'react';
import { action } from '@storybook/addon-actions';

import SimpleDialog from './SimpleDialog';

export default {
  title: 'Components/SimpleDialog',
  component: SimpleDialog,
};

export const HiDialog = () => {
  return <SimpleDialog open={true} title="hi" onClose={action('close')} />;
};
