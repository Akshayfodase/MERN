import React from 'react';
import SimpleCalculator from './SimpleCalculator';
import SimpleBMICalculator from './SimpleBMICalculator';

const App = () => {
  return (
    <div>
      <h1>Simple Calculator and BMI Calculator</h1>
      <div>
        <SimpleCalculator />
      </div>
      <div>
        <SimpleBMICalculator />
      </div>
    </div>
  );
};

export default App;
