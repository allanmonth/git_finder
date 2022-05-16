import React from 'react';

export default function useTypedChildren(text, speed, delayTime) {
  const [textState, setTextState] = React.useState(null);
  let interval = speed;

  if (textState === null && delayTime) {interval = speed + delayTime;};

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTextState(text);
    }, interval);
    return () => clearTimeout(timer);
  });

  return textState;
}
