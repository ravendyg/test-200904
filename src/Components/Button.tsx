import React from 'react';


interface IButtonProps {
	label: string;
	handleAction: () => void;
}
export const Button: React.FC<IButtonProps> = (props) => {
	const {
		label,
		handleAction,
	} = props;

	return <button onClick={handleAction}>{label}</button>;
};