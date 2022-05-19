// Conditionally renders XS or MD Pottery DnD game component - depending on screen size

import React from "react";
import PotteryDNDmd from "./PotteryDNDmd";
import PotteryDNDxs from "./PotteryDNDxs";

const PotteryDNDResponsiveContainer = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    React.useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width >= breakpoint) {
      return (
        <PotteryDNDmd />
      );
    }
    return (
      <PotteryDNDxs />
    );
  }
  
export default PotteryDNDResponsiveContainer;