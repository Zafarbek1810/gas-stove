import React from 'react';

const MyButton = ({className, children, ...otherProps}) => {
  const classes = ["my-default-btn"];

  if(className) {
    classes.push(className);
  }



  return (
    <button className={classes.join(" ")} {...otherProps}>
      {children}
    </button>
  );
};

export default MyButton;
