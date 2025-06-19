import initScrollReveal from "/src/scripts/scrollReveal";
import initTiltEffect from "/src/scripts/tiltAnimation";
import { targetElements, defaultProps } from "/src/data/scrollRevealConfig";
import "./styles.scss"
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
