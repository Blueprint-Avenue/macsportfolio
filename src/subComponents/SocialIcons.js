import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Linkedin, Instagram } from "../components/AllSvgs";
import { DarkTheme, lightTheme } from "../components/Themes";

const Icons = styled.div`
	display: grid;
	flex-directions: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 2rem;
	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled.span`
	width: 3px;
	height: 8rem;
	margin-left: 0.7rem;
	background-color: ${(props) => props.theme.text};
`;

const SocialIcons = (props) => {
	return (
		<Icons>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://github.com/IMackie22" }}
				>
					<Github
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://www.linkedin.com/IMackie22" }}
				>
					<Linkedin
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://Instagram.com/IMackie20" }}
				>
					<Instagram
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: "inherit" }}
					target="_blank"
					to={{ pathname: "https://github.com/IMackie22" }}
				>
					<Facebook
						width={25}
						height={25}
						fill={props.theme === "dark" ? DarkTheme : lightTheme}
					/>
				</NavLink>
			</div>
			<Line />
		</Icons>
	);
};

export default SocialIcons;
