import React from "react";
import useState from "react";
import PotteryDNDContainer from "./PotteryDNDContainer";
import PotteryDNDMobile from "./PotteryDNDMobile";

const PotteryDNDResponsive = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 756;
    React.useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width > breakpoint) {
      return (
        <PotteryDNDContainer />
      );
    }
    return (
      <PotteryDNDMobile />
    );
  }
  
export default PotteryDNDResponsive;