import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Facebook, Github, Linkedin, Instagram} from "../components/AllSvgs";
import {DarkTheme, lightTheme} from "../components/Themes";
import {motion} from "framer-motion";

const Icons = styled.div`
	display: grid;
	flex-direction: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 2rem;
	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled(motion.span)`
	width: 3px;
	height: 8rem;
	margin-left: 0.7rem;
	background-color: ${(props) => props.theme.text};
`;

const SocialIcons = (props) => {
	return (
		<Icons>
			<motion.div
				initial={{
					transform: "scale(0)",
				}}
				animate={{scale: [0, 1, 1, 1.5, 1]}}
				transition={{type: "spring", duration: 1, delay: 1.2}}
			>
				<NavLink
					style={{color: "inherit"}}
					target="_blank"
					to={{pathname: "https://github.com/IMackie22"}}
				>
					<Github
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</motion.div>
			<motion.div
				initial={{
					transform: "scale(0)",
				}}
				animate={{scale: [0, 1, 1, 1.5, 1]}}
				transition={{type: "spring", duration: 1, delay: 1.4}}
			>
				<NavLink
					style={{color: "inherit"}}
					target="_blank"
					to={{pathname: "www.linkedin.com/in/samiyamcintosh"}}
				>
					<Linkedin
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</motion.div>
			<motion.div
				initial={{
					transform: "scale(0)",
				}}
				animate={{scale: [0, 1, 1, 1.5, 1]}}
				transition={{type: "spring", duration: 1, delay: 1.6}}
			>
				<NavLink
					style={{color: "inherit"}}
					target="_blank"
					to={{pathname: "https://Instagram.com/IMackie20"}}
				>
					<Instagram
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</motion.div>
			{/* <motion.div
				initial={{
					transform: "scale(0)",
				}}
				animate={{scale: [0, 1, 1, 1.5, 1]}}
				transition={{type: "spring", duration: 1, delay: 1.8}}
			>
				<NavLink
					style={{color: "inherit"}}
					target="_blank"
					to={{pathname: "https://github.com/IMackie22"}}
				>
					<Facebook
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</motion.div> */}
			<Line
				initial={{
					height: 0,
				}}
				animate={{
					height: "8rem",
				}}
				transition={{
					type: "spring",
					duration: 1,
					delay: 0.8,
				}}
			/>
		</Icons>
	);
};

export default SocialIcons;
