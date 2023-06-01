import { useState, useEffect } from "react";
const Slider = ({setPriorityLevel}) => {
    const [value, onChange] = useState(1);
    const priortyLevelTextArr = ["Not that important", "Somewhat important", "Very important"]
    const [priortyLevelText, setPriorityLevelText] = useState("")


    useEffect(() => {
        const ele = document.querySelector(".bubble");
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    });
    return (
        <div>
            <h4 style={{ textAlign: "center", color: "darkolivegreen" }}>Choose Priority Level</h4>
            <p style={{ textAlign: "center" }} className={priortyLevelText === "Very important" ? ("very-important") : (priortyLevelText === "Somewhat important") ? ("somewhat-important") : ("not-that-important")}>{priortyLevelText}</p>
            <div className="slider-parent">
                <div style={{color: "darkolivegreen" }} className="bubble">{value}</div>
                <input
                    type="range"
                    min="1"
                    max="3"
                    value={value}
                    onChange={({ target: { value: radius } }) => {
                        console.log("Rad", radius)
                        if(parseInt(radius) === 1){
                            setPriorityLevelText(priortyLevelTextArr[0])
                        } else if(parseInt(radius) === 2){
                            setPriorityLevelText(priortyLevelTextArr[1])
                        } else if(parseInt(radius) === 3){
                            setPriorityLevelText(priortyLevelTextArr[2])
                        }
                        onChange(radius);
                        setPriorityLevel(parseInt(radius))
                    }}
                />
            </div>
        </div>
    );
};

export default Slider;
