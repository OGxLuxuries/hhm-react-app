import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/UnderConstruction.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

function UnderConstruction() {

  //@ts-expect-error icon prop is not working
  const iconCog: IconProp = "fa-solid fa-cog";

  const [cogSpeed, setCogSpeed] = useState("cog-slow");

  const accelerate = () => {
    if (cogSpeed === "cog-slow") {
      // Change to accelerated
      setCogSpeed("cog-accelerated");
    } else {
      // Revert back to original
      setCogSpeed("cog-slow");
    }
  };

 

  return (
    <>
      <main className="main-content under-construction">
        
          <img src="hhm-logo.png" id="logo" alt="hhm-logo" />
          <img src="hhm-banner.png" id="banner" alt="hhm-logo" />
        
        
        <h1> Website Coming Soon! </h1>
       
        <div className="cogs">
          <FontAwesomeIcon
            className={cogSpeed}
            icon={iconCog}
            size="6x"
            spin
            spinReverse
          />
          <FontAwesomeIcon className={cogSpeed} icon={iconCog} size="3x" spin />
        </div>
        <button onClick={accelerate}>Click Here to Speed Up Process</button>
      </main>
    </>
  );
}

export default UnderConstruction;
