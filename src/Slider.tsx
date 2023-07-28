import React,{ useState, useEffect } from "react";


interface Props {
  setPriorityLevel: React.Dispatch<React.SetStateAction<string>>;
}

const Slider: React.FC<Props> = ({ setPriorityLevel }) => {
  const [value, onChange] = useState(1);
  const priorityLevelArr = [
    "Not that important",
    "Somewhat important",
    "Very important",
  ];
  const [priorityLevelText, setPriorityLevelText] = useState("");

  useEffect(() => {
    const ele = document.querySelector(".bubble") as HTMLElement
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  return (
    <div>
      <h4 className="center-text" style={{ color: "darkolivegreen" }}>
        Choose Importance Level
      </h4>
      <p
        style={{ textAlign: "center" }}
        className={
          priorityLevelText === "Very important"
            ? "very-important"
            : priorityLevelText === "Somewhat important"
            ? "somewhat-important"
            : "not-that-important"
        }
      >
        {priorityLevelText}
      </p>
      <div className="slider-parent">
        <div className="bubble">
          {value}
        </div>
        <input
          type="range"
          min="1"
          max="3"
          value={value}
          onChange={({ target: { value: radius } }) => {
            if (radius === "1") {
              setPriorityLevelText(priorityLevelArr[0]);
            } else if (radius === "2") {
              setPriorityLevelText(priorityLevelArr[1]);
            } else if (radius === "3") {
              setPriorityLevelText(priorityLevelArr[2]);
            }
            onChange(parseInt(radius));
            setPriorityLevel(radius);
          }}
        />
      </div>
    </div>
  );
};


export default Slider;
