import React from 'react';
import {useTheme} from './ThemeContext';


export const Button: React.FC<{}> = () => {
	const {
		current,
		nextName,
		gotoNext,
	} = useTheme();
	const style = {
		backgroundColor: current.buttonBack,
		border: current.buttonBack,
		outline: 'none',
		color: current.buttonColor,
	};

	return <button
		style={style}
		onClick={gotoNext}
	>Switch to {nextName} theme</button>;
};