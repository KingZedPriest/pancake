"use client"
//Import Needed Components
import Header from "@/components/Rewards/Header";
import SpinningWheel from "@/components/Rewards/SpinningWheel";

const Page = () => {

    const segments = [
        { value: 100, color: '#db7093' },
        { value: 1, color: '#20b2aa', restricted: true }, // Restricted value
        { value: 50, color: '#d63e92' },
        { value: 0, color: '#daa520' },
        { value: 1000, color: '#ff340f' },
        { value: 10, color: '#ff7f50' },
        { value: 5, color: '#3cb371' },
        { value: 20, color: '#4169e1' },
    ];

    //Functions
    const handleSpinEnd = (selectedSegment: Segment) => {
        alert(`You won ${selectedSegment.value}!`);
    };

    return (
        <main>
            <Header />
            <SpinningWheel segments={segments} onSpinEnd={handleSpinEnd} />
        </main>
    );
}

export default Page;