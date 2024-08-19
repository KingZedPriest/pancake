"use client"

import { useState } from 'react';

const SpinningWheel = ({ segments, onSpinEnd }: SpinningWheelProps) => {

    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const spin = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        const segmentAngle = 360 / segments.length;
        const randomIndex = Math.floor(Math.random() * segments.length);
        const randomOffset = Math.random() * segmentAngle;

        // Calculate the exact angle to stop at the selected segment
        const targetAngle = randomIndex * segmentAngle + randomOffset;
        const fullRotations = 360 * 5; // Five full rotations before stopping
        const newRotation = rotation + fullRotations + targetAngle; // Continue from the last rotation

        setRotation(newRotation);

        setTimeout(() => {
            setIsSpinning(false);
            onSpinEnd(segments[randomIndex]);
        }, 4000); // Spin for 4 seconds
    };

    return (
        <main className="spinContainer mx-auto mt-20 mb-10 size-60 md:size-80 xl:size-96">
            <div className="spinBtn" onClick={spin}>Spin</div>
            <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className="number"
                        style={{
                            '--i': index + 1,
                            '--clr': segment.color,
                            transform: `rotate(${index * (360 / segments.length)}deg)`,
                        } as React.CSSProperties}
                    >
                        <span>{segment.value}</span>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default SpinningWheel;

// const SpinningWheel = () => {
//     return (
//         <main className="spinContainer">
//             <div className="spinBtn">Spin</div>
//             <div className="wheel">
//                 <div className="number" style={{'--i': 1, '--clr': '#db7093'} as React.CSSProperties}>
//                     <span>100</span>
//                 </div>
//                 <div className="number" style={{'--i': 2, '--clr': '#20b2aa'} as React.CSSProperties}>
//                     <span>1</span>
//                 </div>
//                 <div className="number" style={{'--i': 3, '--clr': '#d63e92'} as React.CSSProperties}>
//                     <span>50</span>
//                 </div>
//                 <div className="number" style={{'--i': 4, '--clr': '#daa520'} as React.CSSProperties}>
//                     <span>0</span>
//                 </div>
//                 <div className="number" style={{'--i': 5, '--clr': '#ff340f'} as React.CSSProperties}>
//                     <span>1000</span>
//                 </div>
//                 <div className="number" style={{'--i': 6, '--clr': '#ff7f50'} as React.CSSProperties}>
//                     <span>10</span>
//                 </div>
//                 <div className="number" style={{'--i': 7, '--clr': '#3cb371'} as React.CSSProperties}>
//                     <span>5</span>
//                 </div>
//                 <div className="number" style={{'--i': 8, '--clr': '#4169e1'} as React.CSSProperties}>
//                     <span>20</span>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default SpinningWheel;



// import confetti from 'canvas-confetti';

// const MyComponent = () => {
//   const handleCelebrate = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });
//   };

//   return (
//     <div>
//       <h1>Congratulations!</h1>
//       <button onClick={handleCelebrate}>Celebrate</button>
//     </div>
//   );
// };

// export default MyComponent;
