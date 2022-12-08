import { TRACKING_ID } from "config/analytics";
import { TitleNameContext } from "context/TitleNameContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const useAnalyticsEventTracker = () => {
  const location = useLocation();
  const { title } = useContext(TitleNameContext);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search + location.hash,
      });
    }
  }, [title]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAnalyticsEventTracker;
