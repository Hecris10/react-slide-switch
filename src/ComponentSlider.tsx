import React from "react";


export interface ComponentSliderProps {
    position: number;
    children: React.ReactNode[];
    duration?: number;
    transition?:
        | "ease-linear"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end"
        | "steps"
        | "cubic-bezier";
    unMountOnExit?: boolean;
    autoHeight?: boolean;
    minHeight?: number | string;
    className?: string;
}

export const ComponentSlider = React.forwardRef<HTMLDivElement, ComponentSliderProps>(({
    position,
    children,
    duration = 500,
    transition = "ease-linear",
    unMountOnExit = false,
    autoHeight = false,
    minHeight,
    className = ""
}, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number | undefined>();

    React.useEffect(() => {
        if (!autoHeight || !containerRef.current) return;
        
        const slides = containerRef.current.querySelectorAll('.slide-item');
        const currentSlide = slides[position] as HTMLElement;
        
        if (currentSlide) {
            setHeight(currentSlide.offsetHeight);
        }
    }, [position, autoHeight]);

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        height: autoHeight ? height : 'auto',
        width: '100%',
        overflow: 'hidden',
        minHeight,
    };

    const sliderStyle: React.CSSProperties = {
        display: 'flex',
        width: '100%',
        transitionProperty: 'transform',
        transitionTimingFunction: transition,
        transitionDuration: `${duration}ms`,
        transform: `translateX(-${position * 100}%)`
    };

    const slideStyle: React.CSSProperties = {
        height: '100%',
        width: '100%',
        flexShrink: 0,
        padding: '0 4px'
    };

    return (
        <div
            ref={ref}
            style={containerStyle}
            className={className}
        >
            <div
                ref={containerRef}
                style={sliderStyle}
            >
                {children.map((child, index) => {
                    if (!child) return null;

                    if (index !== position && unMountOnExit) {
                        return (
                            <div
                                key={index}
                                style={slideStyle}
                                className="slide-item"
                            />
                        );
                    }

                    return (
                        <div
                            key={index}
                            style={slideStyle}
                            className="slide-item"
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
