import React, {useState} from 'react';
import './App.css';
import {ITheme, ThemeContext} from './ThemeContext';
import {Button} from './Button';


const themes: ITheme[] = [
  {
    name: 'Light',
    background: 'white',
    buttonBack: 'black',
    buttonColor: 'white',
  },
  {
    name: 'Dark',
    background: 'black',
    buttonBack: 'white',
    buttonColor: 'black',
  },
  {
    name: 'Blue',
    background: 'lightblue',
    buttonBack: 'grey',
    buttonColor: 'black',
  },
];

function nextIndex(currentIndex: number) {
  let newIndex = currentIndex + 1;
  if (newIndex >= themes.length) {
    newIndex = 0;
  }
  return newIndex;
}

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  const gotoNext = () => {
    setThemeIndex(nextIndex(themeIndex));
  };
  const style = {
    backgroundColor: themes[themeIndex].background,
  };

  return (
    <ThemeContext.Provider value={{
      current: themes[themeIndex],
      nextName: themes[nextIndex(themeIndex)].name,
      gotoNext,
    }}>
      <div className="App" style={style}>
        <Button/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
