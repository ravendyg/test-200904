import React from 'react';

import {Card} from './Card';
import {useCardsContext} from '../CardsContext';


interface ISectionProps {
	title: string;
}
export const Section: React.FC<ISectionProps> = ({title}) => {
	const { cards } = useCardsContext();

	return <div className='section'>
		<h1>{title}</h1>
		{cards.map((card) =>
			<Card key={card.id} data={card} />
		)}
	</div>;
};