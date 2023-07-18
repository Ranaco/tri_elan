import * as React from "react";

type ScrollType = {
  scrollY: number;
};

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollContext = React.createContext<ScrollType>({
  scrollY: 0,
});

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0);

  const updateScrollY = React.useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", updateScrollY);

    return () => document.removeEventListener("scroll", updateScrollY);
  }, [updateScrollY]);

  return (
    <ScrollContext.Provider value={{ scrollY: scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
