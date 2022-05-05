export const lightTheme = {
	body: "#EEEEEE",
	text: "#00092C",
	fontFamily: "'Source Sans Pro', sans-serif",
	bodyRgba: "	238, 238, 238",
	textRgb: "		0, 9, 44",
};

export const DarkTheme = {
	body: "#FF5F00",
	text: "#00092C",
	subtext: "#EEEEEE",
	fontFamily: "'Source Sans Pro', sans-serif",
	textRgba: " 243, 233, 221",
	bodyRgba: "	255, 95, 0",
	backgroundColor: "#ff5f00",
	backgroundImage:
		"https://www.transparenttextures.com/patterns/basketball.png",
};

export const breakpoints = {
	sm: 20, //em
	md: 30,
	lg: 45,
	xl: 60,
	xxl: 75,
};

export const mediaQueries = (key) => {
	return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
