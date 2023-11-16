import React from "react";
import ChartItems from "./ChartItems";
import datas from "../data.json";

function App() {
  const amountList = datas.map((data) => data.amount);
  const maxAmount = Math.max(...amountList);
  const maxHeight = 150;
  const maxIndex = datas.findIndex((data) => data.amount === maxAmount);

  return (
    <main className="main">
      <header className="header">
        <div className="header__text">
          <p className="header__title text-S">My balance</p>
          <p className="header__num text-M">$921.48</p>
        </div>
        <img
          className="header__logo"
          src="./assets/images/logo.svg"
          alt=""
        ></img>
      </header>
      <section className="card">
        <h1 className="card__header text-M">Spending - Last 7 days</h1>
        <div className="chart-box">
          {datas.map((data, index) => {
            let chartHeight = (data.amount * maxHeight) / maxAmount;
            if (index === maxIndex) {
              return (
                <ChartItems height={chartHeight} day={data.day} isMax={true} />
              );
            } else {
              return (
                <ChartItems height={chartHeight} day={data.day} isMax={false} />
              );
            }
          })}
        </div>
        <hr className="card__line"></hr>
        <div className="card__content">
          <div className="card__sub-content">
            <p className="card__text text-S">Total this month</p>
            <p className="card__num text-L">$478.33</p>
          </div>
          <div className="card__sub-content">
            <p className="card__percent">+2.4%</p>
            <p className="card__text text-S">from last month</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
