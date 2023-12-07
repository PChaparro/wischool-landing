import { useEffect, useState } from "react";

type deviceType = "mobile" | "desktop";

export const useGetDeviceTypeFromScreen = (): deviceType => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width < 768 ? "mobile" : "desktop";
};
