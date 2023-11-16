import React from "react";

function ChartItems(props) {
  return (
    <div className="chart-item">
      <div
        style={{
          height: props.height,
          backgroundColor: props.isMax ? "#76B5BC" : "",
        }}
        className="chart-item__progress-bar"
      ></div>
      <p className="chart-item__text text-XS">{props.day}</p>
    </div>
  );
}

export default ChartItems;
