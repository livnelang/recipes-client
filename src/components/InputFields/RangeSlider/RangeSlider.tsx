import "./RangeSlider.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import { useState } from "react";

interface RangeSliderProps {
  onValueChange: (value: number) => void;
  value: number;
}

const RangeSlider = (props: RangeSliderProps) => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 180;
  const [range, setRange] = useState<number>(MAX_VALUE / 2);

  const handleValueChange = (value: number) => {
    console.log("incoming value: ", value);
    setRange(value);
    props.onValueChange(range);
  };

  return (
    <div className="RangeSlider">
      <InputRange
        maxValue={MAX_VALUE}
        minValue={MIN_VALUE}
        value={props.value}
        onChange={(value) => handleValueChange(value as number)}
      />
    </div>
  );
};

export default RangeSlider;
