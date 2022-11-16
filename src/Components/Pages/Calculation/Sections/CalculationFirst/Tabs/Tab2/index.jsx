import React from 'react';

const Tab2 = ({setActivePage}) => {
  const next=()=>{
    setActivePage(2)
  }
  const prev=()=>{
    setActivePage(1)
  }
  return (
    <div>
      tab2
    </div>
  );
};

export default Tab2;