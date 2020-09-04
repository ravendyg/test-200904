import React from 'react';

import {Button} from './Button';
import {useCardsContext} from '../CardsContext';


export interface ICard {
	id: string;
	buttonLabel: string;
	text: string;
	img: string;
	background?: string;
}
interface ICardProps {
	data: ICard;
}
export const Card: React.FC<ICardProps> = (props) => {
	const {
		id,
		buttonLabel,
		img,
		text,
		background,
	} = props.data;
	const { triggerCardAction } = useCardsContext();
	const style: {background?: string} = {};
	if (background) {
		style.background = background;
	}

	return <div className='card' style={style}>
		<div className="card-header">
			<img src={img} alt="" />
		</div>
		<div className="card-content">
			<p>{text}</p>
			<Button
				handleAction={() => triggerCardAction(id)}
				label={buttonLabel}
			></Button>
		</div>;
</div>;
};