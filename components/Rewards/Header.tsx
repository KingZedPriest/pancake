const Header = () => {
    return ( 
        <main className="font-black text-2xl md:text-3xl xl:text-4xl flex flex-col items-center -mt-6 bordered-text">
            <h1 className="text-coolGreen relative top-1">Spin</h1>
            <h1 className="-rotate-6 relative z-[2] bg-white p-1 rounded-md shadow-sm">To</h1>
            <h1 className="text-warmOrange -mt-1">Win!</h1>
        </main>
     );
}
 
export default Header;