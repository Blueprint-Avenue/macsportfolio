import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import {NavLink} from "react-router-dom";
import {Basketball} from "./AllSvgs";
import Intro from "./Intro";
import {motion} from "framer-motion";
import {mediaQueries} from "./Themes";

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Karla", sans-serif;
		font-weight: 500;
	}
	// background-image: url("https://www.transparenttextures.com/patterns/basketball.png");
	h2 {
		${mediaQueries(40)`
      font-size:1.2em;

  `};

		${mediaQueries(30)`
      font-size:1em;

  `};
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const Contact = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 1;
`;

const BLOG = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	right: 2rem;
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 3;

	@media only screen and (max-width: 50em) {
		text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
	}
`;

const WORK = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: 2rem;
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 1;

	@media only screen and (max-width: 50em) {
		text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
	}
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 1;
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
	z-index: 1;
`;

const rotate = keyframes`
from{
	transform: rotate(0);
}
to{
	transform: rotate(360deg);
}
`;

const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? "85%" : "50%")};
	left: ${(props) => (props.click ? "92%" : "50%")};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
	}

	& > :last-child {
		display: ${(props) => (props.click ? "none" : "inline-block")};
		padding-top: 1rem;
	}

	@media only screen and (max-width: 50em) {
		top: ${(props) => (props.click ? "90%" : "50%")};
		left: ${(props) => (props.click ? "90%" : "50%")};
		width: ${(props) => (props.click ? "80px" : "150px")};
		height: ${(props) => (props.click ? "80px" : "150px")};
	}
	@media only screen and (max-width: 30em) {
		width: ${(props) => (props.click ? "40px" : "150px")};
		height: ${(props) => (props.click ? "40px" : "150px")};
	}
`;
const DarkDiv = styled.div`
	position: absolute;
	margin-top: 0;
	background-color: #ff5f00;
	background-image: url("https://www.transparenttextures.com/patterns/basketball.png");
	margin-bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? "50%" : "0%")};
	height: ${(props) => (props.click ? "100%" : "0%")};
	z-index: 0.09;
	transition: height 0.5s ease, width 1s ease;
`;

const LightDiv = styled.div`
	position: absolute;
	margin-top: 0;
	background-color: #00092c;
	background-image: url("https://www.transparenttextures.com/patterns/basketball.png");
	margin-bottom: 0;
	left: 50%;
	width: ${(props) => (props.click ? "50%" : "0%")};
	height: ${(props) => (props.click ? "100%" : "0%")};
	z-index: 0.09;
	transition: height 0.5s ease, width 1s ease;
`;

export const Main = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<MainContainer>
			<DarkDiv click={click} />
			<LightDiv click={click} />
			<Container>
				<PowerButton />
				<LogoComponent theme={click ? "dark" : "light"} />
				<SocialIcons theme={click ? "dark" : "light"} />
				<DarkDiv click={click} />
				<LightDiv click={click} />
				<Center click={click}>
					<Basketball
						onClick={() => handleClick()}
						width={click ? 120 : 200}
						height={click ? 120 : 200}
					/>
					<span>click here</span>
				</Center>
				<Contact
					target="_blank"
					to={{pathname: "mailto:skmcintosh20@gmail.com"}}
					click={click}
				>
					<motion.h2
						initial={{
							y: -200,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						animate={{
							y: 0,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						whileHover={{scale: 1.1}}
						whileTap={0.9}
					>
						Say hi..
					</motion.h2>
				</Contact>
				<BLOG to="/blog" click={click}>
					<motion.h2
						initial={{
							y: -200,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						animate={{
							y: 0,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						whileHover={{scale: 1.1}}
						whileTap={0.9}
					>
						BLOG
					</motion.h2>
				</BLOG>
				<WORK to="/work" click={click}>
					<motion.h2
						initial={{
							y: -200,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						animate={{
							y: 0,
							transition: {type: "spring", duration: 1.5, delay: 1},
						}}
						whileHover={{scale: 1.1}}
						whileTap={0.9}
					>
						Work
					</motion.h2>
				</WORK>
				<BottomBar>
					<ABOUT to="/about" click={click}>
						<motion.h2
							initial={{
								y: 200,
								transition: {type: "spring", duration: 1.5, delay: 1},
							}}
							animate={{
								y: 0,
								transition: {type: "spring", duration: 1.5, delay: 1},
							}}
							whileHover={{scale: 1.1}}
							whileTap={0.9}
						>
							About Me..
						</motion.h2>
					</ABOUT>
					<SKILLS to="/skills" click={click}>
						<motion.h2
							initial={{
								y: 200,
								transition: {type: "spring", duration: 1.5, delay: 1},
							}}
							animate={{
								y: 0,
								transition: {type: "spring", duration: 1.5, delay: 1},
							}}
							whileHover={{scale: 1.1}}
							whileTap={0.9}
						>
							My Skills..{" "}
						</motion.h2>
					</SKILLS>
				</BottomBar>
			</Container>
			{click ? <Intro click={click} /> : null}
		</MainContainer>
	);
};
