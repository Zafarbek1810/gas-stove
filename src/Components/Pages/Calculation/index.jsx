import React, {useState} from 'react';
import Header from "../Header"
import CalculationFirst from "./Sections/CalculationFirst";
import CalculationSecond from "./Sections/CalculationSecond";
import {CalculationWrapper} from "./Calculation.style";

const Calculation = () => {

  const [activePage, setActivePage] = useState(1)

  const next=()=>{
    setActivePage(2)
  }
  const prev=()=>{
    setActivePage(1)
  }
  return (
    <CalculationWrapper>
      <Header/>
      <CalculationFirst activePage={activePage} setActivePage={setActivePage}/>
      {/*<CalculationSecond/>*/}
      <div className="btns">
        <button className="prev" onClick={prev}>PREV</button>
        <button className="next" onClick={next}>NEXT</button>
      </div>
    </CalculationWrapper>
  );
};

export default Calculation;