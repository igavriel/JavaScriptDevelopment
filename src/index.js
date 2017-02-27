import './index.css';

// library for formatting numbers
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

debugger;

// special `` instead of '' to use  for ${variable} format
console.log(`I would pay ${courseValue} for this course`);
