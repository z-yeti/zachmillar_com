import ReactGA from "react-ga4";

ReactGA.initialize("G-BK27G9QBK3");

export const trackPageview = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
