import React from 'react';
import { DummyWrapper, BackgroundWrapper } from '../../DummyWrapper';
import CustomSliderInput from './CustomSliderInput';

export default {
  title: 'Components/CustomSliderInput',
  component: CustomSliderInput,
  decorators: [DummyWrapper, BackgroundWrapper],
};

export const LabeledSlider = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <CustomSliderInput
      title="Hello"
      unit="units"
      onChangeSlider={handleChange}
      value={value}
      min={0}
      max={100}
      minTitleWidth="100px"
      minUnitWidth="100px"
    />
  );
};

export const SliderWithDialog = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <CustomSliderInput
      title="Click on the value to open the dialog"
      unit="units"
      onChangeSlider={handleChange}
      value={value}
      min={0}
      max={100}
      inputCheck={a => a.length > 0}
    />
  );
};
