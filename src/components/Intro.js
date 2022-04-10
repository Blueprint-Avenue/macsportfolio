import React from "react";
import styled from "styled-components";
// import Me from "../assets/Images/myavatar-head.png";
import Me from "../assets/Images/myavatar.png";
// import Me from "../assets/Images/myavatar-body.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
    position:absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50% );
	width: 65vw;
    height: 55vh;
	display: flex;
    background-repeat: no-repeat;
    background-size: 100% 2px;
	background: linear-gradient(
		to right,
		#EEEEEE 50%,
		#FF5F00) 50% bottom,
         linear-gradient(
		to right,
		#FF5F00 50%,
		#EEEEEE) 50% top;
        border-left: 2px solid #FF5F00;
        border-right: 2px solid #EEEEEE;
        z-index:1;

	);
`;

const SubBox = styled.div`
	width: 50%;
	position: relative;
	display: flex;

	.pic {
		position: fixed;
		bottom: 0;
		left: 75%;
		transform: translate(-50%, 0%);
		width: 100%;
		height: auto;
	}
`;

const Text = styled.div`
	font-size: calc(1em + 1.5vw);
	color: #00092c;
	padding: 2rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	& > *:last-child {
		color: #ff5f00;
		font-size: calc(0.5rem + 1.5vw);
		font-weight: 300;
	}
`;

const Intro = () => {
	return (
		<Box
			initial={{ height: 0 }}
			animate={{ height: "55vh" }}
			transition={{ type: "spring", duration: 2, delay: 1 }}
		>
			<SubBox>
				<Text>
					<h1>Hi,</h1>
					<h3>I am Samiya McIntosh</h3>
					<h6>I design Fullstack applications!</h6>
				</Text>
			</SubBox>
			<SubBox>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}
				>
					<img className="pic" src={Me} alt="cartoon profile image" />
				</motion.div>
			</SubBox>
		</Box>
	);
};

export default Intro;
