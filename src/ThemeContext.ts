import React, {useContext} from 'react';


export interface ITheme {
	name: string;
	background: string;
	buttonBack: string;
	buttonColor: string;
}

export interface IThemeContext {
	current: ITheme;
	nextName: string;
	gotoNext: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>(null as any);

export function useTheme() {
	return useContext(ThemeContext);
}