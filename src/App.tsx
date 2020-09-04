import React, {ChangeEvent, useState} from 'react';
import './App.css';


const App: React.FC<{}> = () => {
  const [value, setValue] = useState(localStorage.getItem("info") || "");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    localStorage.setItem("info", value);
    setValue(value);
  };

  return <div>
    <input value={value} type="text" onChange={handleChange} />
    <p>{value}</p>
  </div>;
};

export default App;
