import {  DefaultTheme } from 'styled-components'


export interface ThemeProps extends DefaultTheme {
  theme: {
    primary: string;

    tertiary: string;
    
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;

    grey1:string;
    grey2: string;
    grey3:string;
    grey4: string;

    black: string;
    white: string;  
  };
  color?:string
}
export interface FlexibleComponentProps{
  padding?: string;
  margin?: string;
  color?:string;
  wide?: string;
  align?: string;
  size?: string;
  justify?: string;
  background?: string;
  url?: string;
  minHeight?:string;
  wrap?:string;
  width?: string;
}

export interface IRepairs{
  title: string;
  body: string;
  imageUrl?: string;
  linkUrl?: string;
}