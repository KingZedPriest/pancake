"use client"

import { useState } from 'react';
import confetti from 'canvas-confetti';

const SpinningWheel = ({ segments, onSpinEnd }: SpinningWheelProps) => {

    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    //Functions
    const handleCelebrate = () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      };

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
            handleCelebrate()
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