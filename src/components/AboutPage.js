import React from "react";
import styled, {ThemeProvider, keyframes} from "styled-components";
import {DarkTheme} from "./Themes";
import {Design, Develop} from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import mj from "../assets/Images/mj.png";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Btn = styled.div`
	background-color: #ff5f00;
	z-index: 1;
	position: relative;
`;

const float = keyframes`
0%{transform: translateY(-10px)}
50%{transform: translateY(15px) translateX(15px)}
100%{transform: translateY(-10px)}

`;

const Jumpman = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;
	animation: ${float} 4s ease infinite;

	img {
		width: 100%;
		height: auto;
	}
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: #eeeeee;
	padding: 2rem;
	width: 55vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.25;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(0.6rem + 1vw);
	backdrop-filter: blur(4px);
	position: absolute;
	left: calc(5rem + 5vw);
	top: 10rem;
	font-family: "Ubutntu Mono", monospace;
	font-style: italic;
`;

const AboutPage = () => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Btn>
				<PowerButton />
			</Btn>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<ParticleComponent theme="dark" />

				<Jumpman>
					<img src={mj} alt="astroman" />
				</Jumpman>
				<Main>
					I am from Minneapolis, Minnesota. Currently located in Los Angeles.
					<br></br>
					I've always had a passion for design, and a passion to program since
					my very first Myspace page in highschool.
					<br></br>I love the challenge of solving new problems, and expanding
					my professional knowledge.
					<br></br>I attended Nucamp Coding Bootcamp. During my bootcamp I
					received high marks on all my assignments, and graduated with honors.
					<br></br>I also have a BA degree in film from Augsburg University.
					<br></br>I love to cook, I am an avid basketball fan, and I collect
					vinyls.
					<br></br>You can connect with me via social links or email.
				</Main>
				<BigTitle text="About" top="10%" left="5%" />
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
