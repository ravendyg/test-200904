import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import {Section} from './Components/Section';
import {ICard} from './Components/Card';
import {CardsContex} from './CardsContext';

const defaultCards: ICard[] = [
  {
    id: 'btn1',
    text: 'This is the text of first card',
    img: 'https://picsum.photos/300/300',
    buttonLabel: 'Click me to refresh the page',
  }, {
    id: 'btn2',
    text: 'This is the text of the card that follows',
    img: 'https://picsum.photos/300/300',
    buttonLabel: 'Click me to turn first card background blue',
  }
];

function App() {
  const [cards, setCards] = useState(defaultCards);
  const triggerCardAction = useCallback((id: string) => {
    switch (id) {
      case defaultCards[0].id: {
        window.location.reload();
        break;
      }
      case defaultCards[1].id: {
        setCards(cards.map(card => {
          if (card.id === id) {
            return {
              ...card,
              background: 'blue',
            };
          }
          return card;
        }));
        break;
      }
    }
  }, []);
  const contextValue = useMemo(() => ({
    cards,
    triggerCardAction,
  }), [cards, triggerCardAction]);

  return <CardsContex.Provider value={contextValue}>
    <Section
      title='Card Component'
    />
  </CardsContex.Provider>;
}

export default App;
