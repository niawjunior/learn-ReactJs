import React from 'react'

const NumberList=(props)=> {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <Num num={ numbers }/>
  );
}

const Num=(props)=>{
  const numbers = props.num;
  return numbers.map((num) =>
    <li key={num.toString()}>
      {num}
    </li>
  );
}

export default NumberList;