//Import Needed Components
import DownBarLinks from "./DownbarLinks";

//Import Needed Icons
import { Home, Crown1, Setting2, Profile, MessageQuestion } from "iconsax-react";

const DownBar = () => {
    return ( 
        <main className="relative bottom-0 left-0 flex gap-x-3 justify-between">
            <DownBarLinks icon={<Home size="24" variant="Bold"/>} path="/" pathName="Home"/>
        </main>
     );
}
 
export default DownBar;