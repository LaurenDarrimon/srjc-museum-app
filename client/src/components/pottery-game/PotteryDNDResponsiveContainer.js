// Conditionally renders XS or MD Pottery DnD game component - depending on screen size

import React from "react";
import PotteryDNDmd from "./PotteryDNDmd";
import PotteryDNDmdAlt from "./PotteryDNDmdAlt"
import PotteryDNDxs from "./PotteryDNDxs";


const PotteryDNDResponsiveContainer = () => {
    const [width, setWidth] = React.useState(window.innerWidth); // get screen width
    const breakpoint = 768; //set breakpoint

    function isTouchDevice() {  //determine if touch device
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    
    const isTouchScreen = isTouchDevice();

    React.useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width <= breakpoint) {
      return (
        <PotteryDNDxs />
      );
    } else if ((width >= breakpoint) && isTouchScreen) {
      return (
        <PotteryDNDmd />
      );
    } else {
      return (
        <PotteryDNDmdAlt />
      );
    }
   
  }
  
export default PotteryDNDResponsiveContainer;