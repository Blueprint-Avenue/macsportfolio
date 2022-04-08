import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
	display: inline-block;
	color: ${(props) => props.theme.text};
	font-family: "Pacifico", cursive;

	position: fixed;
	margin-left: 2rem;
	matgin-top: 2rem;
	z-index: 3;
`;

const LogoComponent = () => {
	return <Logo>SM</Logo>;
};

export default LogoComponent;
