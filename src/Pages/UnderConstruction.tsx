import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/UnderConstruction.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';


function UnderConstruction() {


    //@ts-expect-error icon prop is not working
    const myIcon : IconProp = "fa-solid fa-helmet-safety"
    //@ts-expect-error icon prop is not working
    const iconCog : IconProp = "fa-solid fa-cog"

    const [cogSpeed, setCogSpeed] = useState('cog-slow');
    

    const accelerate = () => {
        if (cogSpeed === 'cog-slow') {
            // Change to accelerated 
            setCogSpeed('cog-accelerated');
            
        } else {
            // Revert back to original
            setCogSpeed('cog-slow');
            
        }
    };
    
    return (<>
        <main className="main-content under-construction">
        <img src="hhm-logo.png" id="logo" alt="hhm-logo" />
        <h1><FontAwesomeIcon icon={myIcon}   /> Website Coming Soon! <FontAwesomeIcon icon={myIcon}   /></h1>
        <h2>
                <em>Hey there! Heavenly Hope Ministries is launching their first website! 
                    Stay tuned!
                </em>
        </h2>
        <div className='cogs'>        
        <FontAwesomeIcon className={cogSpeed}  icon={iconCog} size="6x" spin spinReverse/>
        <FontAwesomeIcon className={cogSpeed}  icon={iconCog} size="3x" spin />
        
        
        </div>
        <button onClick={accelerate}>Click Here to Speed Up Process</button>
            
        </main>
        <h1 className='center'>hello</h1>

    </>);
}

export default UnderConstruction;