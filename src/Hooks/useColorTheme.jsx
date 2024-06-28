import { createContext, useContext, useMemo, useState, useEffect } from "react";

const ColorThemeContext = createContext({
  color: `rgb(5,5,5)`,
  readableColor: "", // Add appropriate default value
  handleThemeChange: () => {}, // Add appropriate default value or implementation
  colorPercentage: 0, // Add appropriate default value
});

export function useColorTheme() {
  const {
    color,
    readableColor,
    inverseReadableColor,
    handleThemeChange,
    colorPercentage,
    color1,
    color2,
  } = useContext(ColorThemeContext);
  return {
    theme: color,
    readableColor,
    inverseReadableColor,
    handleThemeChange,
    colorPercentage,
    color1,
    color2,
  };
}

export function ThemeContextProvider({ children }) {
  //const color1 = [15, 12, 29];
  //const color2 = [234, 215, 254];
  const color1 = [37, 41, 45];
  const color2 = [255, 183, 74];

  const [colorPercentage, setColorPercentage] = useState(100);
  const [readableColor, setReadableColor] = useState(
    `rgb(${color1.join(",")})`
  );
  const [inverseReadableColor, setInverseReadableColor] = useState(
    `rgb(${color2.join(",")})`
  );
  //const [color, setColor] = useState(`rgb(${color2.join(",")})`);
  const color = useMemo(() => {
    return lerpRGBColor(color1, color2, colorPercentage / 100);
  }, [colorPercentage]);

  const handleThemeChange = (value) => {
    setColorPercentage(value);
    setReadableColor(() => {
      if (value < 50) {
        return `rgb(${color2.join(",")})`;
      } else {
        return `rgb(${color1.join(",")})`;
      }
    });
    setInverseReadableColor(() => {
      if (value < 50) {
        return `rgb(${color1.join(",")})`;
      } else {
        return `rgb(${color2.join(",")})`;
      }
    });

    //setColor(lerpRGBColor(color1, color2, value / 100));
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--darkColor",
      `rgb(${color1.join(",")})`
    );
    document.documentElement.style.setProperty(
      "--lightColor",
      `rgb(${color2.join(",")})`
    );
    document.documentElement.style.setProperty(
      "--readableColor",
      readableColor
    );
    document.documentElement.style.setProperty(
      "--inverseReadableColor",
      inverseReadableColor
    );
    document.documentElement.style.setProperty("--currentColor", color);
  }, [color1, color2, readableColor, color, inverseReadableColor]);

  return (
    <ColorThemeContext.Provider
      value={{
        color,
        readableColor,
        inverseReadableColor,
        handleThemeChange,
        colorPercentage,
        color1,
        color2,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

function lerpRGBColor(color1, color2, factor) {
  const result = color1.map((channel, index) => {
    return Math.round(channel + factor * (color2[index] - channel));
  });

  return `rgb(${result.join(",")})`;
}
