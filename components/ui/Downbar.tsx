//Import Needed Components
import DownBarLinks from "./DownbarLinks";

//Import Needed Icons
import { Home, Setting2, Profile, MessageQuestion, Crown } from "iconsax-react";

const DownBar = () => {
    return ( 
        <main className="absolute bottom-0 left-0 flex gap-x-3 justify-between bg-white p-4 md:p-6 xl:p-8 shadow-sm w-full">
            <DownBarLinks icon={<Home size="24" variant="Bold"/>} path="/" pathName="Home"/>
            <DownBarLinks icon={<MessageQuestion size="24" variant="Bold"/>} path="/how-to" pathName="How To?"/>
            <DownBarLinks icon={<Crown size="24" variant="Bold"/>} path="/rewards" pathName="Rewards"/>
            <DownBarLinks icon={<Profile size="24" variant="Bold"/>} path="/profile" pathName="Profile"/>
            <DownBarLinks icon={<Setting2 size="24" variant="Bold"/>} path="/settings" pathName="Settings"/>
        </main>
     );
}
 
export default DownBar;