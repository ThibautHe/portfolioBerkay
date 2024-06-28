import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContextProvider, useColorTheme } from "./Hooks/useColorTheme.jsx";

export const Slider = ({
  isVertical,
  offsetLeft,
  hasEffect,
  isRelative,
  sliderHeight,
  BallPos,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { theme, readableColor, handleThemeChange, colorPercentage } = useColorTheme();
  const sliderRef = useRef(null);

  const DIVNAME = isVertical ? "vslider" : "slider";
  const POSITION = isRelative ? "relative" : "absolute";

  const STYLE = isVertical
    ? { backgroundColor: readableColor, top: `${BallPos}%` }
    : { left: `${colorPercentage}%`, backgroundColor: readableColor };
  const BORDERSTYLE = isVertical
    ? { borderColor: readableColor, top: `${BallPos}%` }
    : { left: `${colorPercentage}%`, borderColor: readableColor };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !hasEffect) {
        return;
      }

      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newPosition = e.clientX - sliderRect.left;
      
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > sliderRect.width) {
        newPosition = sliderRect.width;
      }

      const percentage = (newPosition / sliderRect.width) * 100;

      const roundedValue = Math.round(percentage);
      if (roundedValue === colorPercentage) {
        return;
      }
      handleThemeChange(roundedValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (!hasEffect) {
      return;
    }

    e.preventDefault();
    setIsDragging(true);
  };

  return isRelative ? (
    <div
      style={{ position: POSITION, height: sliderHeight }}
      className={`${DIVNAME}-container`}
    >
      <div
        ref={sliderRef}
        className={`${DIVNAME}`}
        onMouseDown={handleMouseDown}
        style={{ left: offsetLeft, backgroundColor: readableColor }}
      >
        <div className={`${DIVNAME}-ball`} style={STYLE}></div>
        <div className={`${DIVNAME}-ball-outline`} style={BORDERSTYLE}></div>
      </div>
    </div>
  ) : (
    <div
      ref={sliderRef}
      className={`${DIVNAME}`}
      onMouseDown={handleMouseDown}
      style={{
        left: offsetLeft,
        height: sliderHeight,
        backgroundColor: readableColor,
      }}
    >
      <div className={`${DIVNAME}-ball`} style={STYLE}></div>
      <div className={`${DIVNAME}-ball-outline`} style={BORDERSTYLE}></div>
    </div>
  );
};
