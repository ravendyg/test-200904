import  React, { useContext } from 'react';
import {ICard} from './Components/Card';

interface ICardsContext {
	cards: ICard[];
	triggerCardAction: (id: string) => void;
}
export const CardsContex = React.createContext<ICardsContext>(null as any);

export function useCardsContext() {
	return useContext(CardsContex);
}