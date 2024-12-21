import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Wallet3D = () => {
    const walletRef = useRef(null);
    const coinsRef = useRef(null);
    const { ref: sectionRef, inView } = useInView({ threshold: 0.2 }); // Adjust threshold as needed

    useEffect(() => {
        let scrollProgress = 0;
        if (inView && walletRef.current) {
            const { top, height } = walletRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            scrollProgress = Math.max(0, 1 - (top + height) / windowHeight);
        }

        const rotationX = -scrollProgress * 160; // Flap opening
        const rotationY = scrollProgress * 20;  // Subtle Y rotation for realism
        const rotationZ = scrollProgress * 10;  // Subtle Z rotation
        const walletScale = 1 - scrollProgress * 0.1; // Slight scale down

        walletRef.current.style.transform = `
            translate(-50%, -50%)
            rotateX(${rotationX}deg)
            rotateY(${rotationY}deg)
            rotateZ(${rotationZ}deg)
            scale(${walletScale})
        `;


        // More realistic coin animation with physics-based spread
        if (coinsRef.current) {
            Array.from(coinsRef.current.children).forEach((coin, i) => {
                const angle = (i / 5) * Math.PI * 2;
                const spreadRadius = scrollProgress * 120 * (1 + Math.random() * 0.2);  // Randomize spread
                const x = Math.sin(angle) * spreadRadius;
                const y = -Math.cos(angle) * spreadRadius + scrollProgress * 40; // Y offset simulates gravity
                const coinScale = 1 - scrollProgress * 0.7;
                coin.style.transform = `translate(${x}px, ${y}px) scale(${coinScale})`;
                coin.style.opacity = 1 - scrollProgress;
            });
        }
    }, [inView]);


    return (
        <div ref={sectionRef} className="relative h-96 mb-16 perspective-800 overflow-hidden"> {/* Add perspective */}
            <div ref={walletRef} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Wallet Body */}
                <div className="relative w-64 h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-2xl transform-style-preserve-3d">
                    {/* Wallet Flap */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl origin-top"
                    />
                    {/* Coins */}
                    <div ref={coinsRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {[...Array(8)].map((_, i) => ( // More coins
                            <div
                                key={i}
                                className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                                style={{
                                    transformStyle: "preserve-3d", // preserve-3d for smooth scaling
                                }}
                            />
                        ))}
                    </div>

                    {/* Add subtle inner shadow */}
                    <div className="absolute inset-0 rounded-xl border border-purple-900 opacity-50"></div>
                </div>
            </div>
        </div>
    );
};


export default Wallet3D;