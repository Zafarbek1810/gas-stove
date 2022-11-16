import React, {useState} from 'react';
import {FirstWrapper} from "./CalculationFirst.style";
import Container from "../../../../Common/Container";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";

const CalculationFirst = ({activePage, setActivePage}) => {


  let Component = null
  switch (activePage) {
    case 1: {
      Component = <Tab1 setActivePage={setActivePage}/>
      break;
    }
    case 2: {
      Component = <Tab2 setActivePage={setActivePage}/>
      break;
    }
  }

  const tabMassiv = [
    {
      title: "Select a model",
      id: 1
    },
    {
      title: "Price",
      id: 2
    }
  ]


  return (
    <FirstWrapper>
      <Container>
        <h3 className="title">Calculation</h3>
        <div className="tabs">
          {tabMassiv.map((item, index)=>{
            return <button
              onClick={() => setActivePage(item.id)}
              key={index}
              className={`tab-item ${activePage >= item.id ? "active" : ""}`}
            >
             <p className="btnText"> <span>0{item.id}</span> <br/> {item.title}</p>
            </button>
          })}
        </div>
        <div className="component">
          {Component}
        </div>
      </Container>
    </FirstWrapper>
  );
};

export default CalculationFirst;