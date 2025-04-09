import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";

export const RouteTracker = () => {
  ReactGA.initialize("G-BK27G9QBK3");

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};
