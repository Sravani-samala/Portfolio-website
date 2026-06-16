import React, { useEffect, useRef } from 'react';

const RotatingGradientButton = ({
    children = "Button Text",
    href = null,
    onClick,
    className = "",

    // Main customization prop - just change the gradient color
    gradientColor = "#00ff88", // Default green
    backgroundColor = "#171717",

    // Optional props for fine-tuning
    animationSpeed = 1, // Speed multiplier
    size = "medium", // small, medium, large
    spanClassName = "",
    ...props
}) => {
    const buttonRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const element = buttonRef.current;
        if (!element) return;

        let angle = 0;

        const rotateGradient = () => {
            angle = (angle + animationSpeed) % 360;
            element.style.setProperty("--gradient-angle", `${angle}deg`);
            animationRef.current = requestAnimationFrame(rotateGradient);
        };

        rotateGradient();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animationSpeed]);

    // Size configurations
    const sizeClasses = {
        small: "px-4 py-2 text-xs",
        medium: "px-8 py-4 text-sm",
        large: "px-12 py-6 text-base"
    };

    // Fixed black button style with customizable gradient color
    const buttonStyle = {
        '--c': backgroundColor, // Always black background
        '--p': '10%', // Fixed gradient width
        '--gradient-color': gradientColor,
        background: `linear-gradient(var(--c), var(--c)) padding-box,
                 conic-gradient(
                   from var(--gradient-angle, 0deg),
                   transparent,
                   var(--gradient-color) var(--p),
                   transparent calc(var(--p) * 2)
                 ) border-box`,
        border: '1px solid transparent',
        color: 'white' // Always white text
    };

    const spanClasses = `relative z-10 block ${sizeClasses[size]}`;

    const baseClasses = `
    inline-block font-semibold uppercase tracking-widest 
    transition-all duration-300 hover:scale-105  cursor-pointer 
    no-underline font-Jost
    ${className}
  `.trim();

    if (href) {
        return (
            <a
                ref={buttonRef}
                href={href}
                className={`${baseClasses} rotating-btn`}
                style={buttonStyle}
                onClick={onClick}
                {...props}
            >
                <span className={`${spanClasses} ${spanClassName}`}>
                    {children}
                </span>
            </a>
        );
    }

    return (
        <button
            ref={buttonRef}
            className={`${baseClasses} rotating-btn`}
            style={buttonStyle}
            onClick={onClick}
            {...props}
        >
            <span className={`${spanClasses} ${spanClassName}`}>
                {children}
            </span>
        </button>
    );
};

export default RotatingGradientButton;