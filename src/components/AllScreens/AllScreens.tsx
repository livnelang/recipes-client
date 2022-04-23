import "./AllScreens.css";
import { ReactElement, useState } from "react";
import Ingredient from "../InputFields/Ingredient/Ingredient";
import StepField from "../InputFields/StepField/StepField";
import TextArea from "../InputFields/TextArea/TextArea";
import TextField from "../InputFields/TextField/TextField";
import RangeSlider from "../InputFields/RangeSlider/RangeSlider";

interface ComponentPreview {
  name: string;
  element: ReactElement;
}

const componentsPreview: ComponentPreview[] = [
  {
    name: "Text Field",
    element: <TextField name="livne" placeholder="Enter food name" />,
  },
  {
    name: "Text Area",
    element: (
      <TextArea name="livne" placeholder="Tell a little about your food" />
    ),
  },
  {
    name: "Ingredient",
    element: (
      <Ingredient onDelete={() => {}} value="" onValueChange={() => {}} />
    ),
  },
  {
    name: "Step Field",
    element: (
      <StepField
        stepNumber={1}
        step={{ text: "Mix all ingredients in a bowl!", images: [] }}
        onChange={() => {}}
        onDelete={() => {}}
      />
    ),
  },
  {
    name: "Range Slider",
    element: <RangeSlider onValueChange={(e) => {}} value={90} />,
  },
];

const AllScreens = () => {
  const [selectedElement, setSelectedElement] =
    useState<ComponentPreview | null>(null);
  const handleComponentPreviewClick = (component: ComponentPreview) => {
    setSelectedElement(component);
  };

  const handleGoBackToElements = () => {
    setSelectedElement(null);
  };

  const renderSelection = () => {
    if (selectedElement === null) {
      return (
        <div className="AllComponents">
          <h4>Components List</h4>
          <ul>
            {componentsPreview.map((component, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleComponentPreviewClick(component)}
                >
                  {index + 1}. {component.name}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    return (
      <div className="selectedElementContainer">
        <div className="topPanel">
          <span onClick={() => handleGoBackToElements()}> {"<"} Back </span>
        </div>
        <div>
          <h3 className="componentName">{selectedElement.name}</h3>
          <div>{selectedElement.element}</div>
        </div>
      </div>
    );
  };

  return <div style={{ margin: "32px" }}>{renderSelection()}</div>;
};

export default AllScreens;
