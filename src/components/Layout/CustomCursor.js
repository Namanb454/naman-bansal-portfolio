// CustomCursor.js
import React, { useState, useEffect } from 'react';
// import './CustomCursor.css'; // Import the custom styles

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    );
};

export default CustomCursor;
