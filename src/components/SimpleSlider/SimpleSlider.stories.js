import React from 'react';

import SimpleSlider from './SimpleSlider';

// Decorators for all stories of a component
export default {
  title: 'Components/SimpleSlider',
  component: SimpleSlider,
  decorators: [
    Story => (
      <div style={{ margin: '5em' }}>
        <Story />
      </div>
    ),
  ],
};

export const BasicSlider = () => {
  return <SimpleSlider />;
};
// Decorator for a story
BasicSlider.decorators = [
  Story => (
    <div
      style={{
        border: '5px outset red',
        'background-color': 'lightblue',
      }}
    >
      <Story />
    </div>
  ),
];
