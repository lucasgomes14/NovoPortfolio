"use client";
import {useEffect, useState} from "react";

export default function Background() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const circleMotion = (radius: number, speed: number, offset: number = 0) => {
        const angle = (scrollY * speed + offset) * (Math.PI / 180); // converte para radianos
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    };

    const ellipseMotion = (radiusX: number, radiusY: number, speed: number, offset: number = 0) => {
        const angle = (scrollY * speed + offset) * (Math.PI / 180);
        return {
            x: Math.cos(angle) * radiusX,
            y: Math.sin(angle) * radiusY,
        };
    };

    const imperfectMotion = (radiusX: number, radiusY: number, speed: number, offset: number = 0) => {
        const angle = (scrollY * speed + offset) * (Math.PI / 180);
        const wobble = Math.sin(scrollY * 0.015) * 20; // dá uma “quebrada” no círculo
        return {
            x: Math.cos(angle) * (radiusX + wobble),
            y: Math.sin(angle) * (radiusY - wobble),
        };
    };

    const circle1 = ellipseMotion(80, 50, .1);
    const circle2 = circleMotion(50, 0.1, 90);
    const circle3 = imperfectMotion(10, 10, .001);
    const circle4 = circleMotion(20, 0.4, 270);
    const circle5 = circleMotion(10, .1);

    return (
        <div>
            <div
                className="fixed top-30 left-50 size-30 rounded-full bg-radial from-[#C90000]/70 to-transparent blur-2xl animate-[pulse_8s_ease_infinite]"
                style={{ transform: `translate(${circle1.x}px, ${circle1.y}px)` }}>
            </div>
            <div
                className="fixed top-90 left-20 size-50 rounded-full bg-radial from-[#9A0101]/30 to-transparent blur-lg animate-[pulse_6s_ease_infinite_reverse]"
                style={{ transform: `translate(${circle2.x}px, ${circle2.y}px)` }}>
            </div>
            <div
                className="fixed top-40 right-80 size-30 rounded-full bg-radial from-[#909595]/50 to-transparent blur-2xl animate-[pulse_4s_ease_infinite]"
                style={{ transform: `translate(${circle3.x}px, ${circle3.y}px)` }}>
            </div>
            <div
                className="fixed top-100 right-30 size-30 rounded-full bg-radial from-[#9A0101]/35 to-transparent blur-2xl animate-[pulse_4s_ease_infinite]"
                style={{ transform: `translate(${circle4.x}px, ${circle4.y}px)` }}>
            </div>
            <div
                className="fixed top-30 right-20 size-10 rounded-full bg-radial from-[#F2F5FA] to-transparent blur-2xl animate-[pulse_4s_ease_infinite]"
                style={{ transform: `translate(${circle5.x}px, ${circle5.y}px)` }}>
            </div>
        </div>
    );
};