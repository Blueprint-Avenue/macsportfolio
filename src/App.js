import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./components/Themes";
import { Switch, Route } from "react-router";
import "./globalStyles.css";
import { Main } from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import SkillsPage from "./components/SkillsPage";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
	const location = useLocation();
	return (
		<>
			<ThemeProvider theme={lightTheme}>
				<SoundBar />
				<AnimatePresence exitBeforeEnter>
					{" "}
					//framer-motion on page change
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={Main} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/blog" component={BlogPage} />
						<Route exact path="/work" component={WorkPage} />
						<Route exact path="/skills" component={SkillsPage} />
					</Switch>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;
