import React from 'react';
import { Slider } from '@material-ui/core';

function SimpleSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      aria-labelledby="continuous-slider"
    />
  );
}

export default SimpleSlider;
