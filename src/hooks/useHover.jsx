import React from "react";

const useHover = () => {
  const [controlState, setControlState] = useState(false);

  const hoverHandler = useCallback(() => {
    setControlState(true);
  }, [setControlState]);

  const leaveHandler = useCallback(() => {
    setControlState(false);
  }, [setControlState]);

  return {
    controlState,
    hoverHandler,
    leaveHandler,
  };
};
