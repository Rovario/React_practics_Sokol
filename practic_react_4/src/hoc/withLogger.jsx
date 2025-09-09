import React from "react";

const withLogger = (Component) => {
  const Wrapped = (props) => {
    React.useEffect(() => {
      console.log(`[Logger] visited ${Component.name} at ${new Date().toISOString()}`);
    }, []);

    return <Component {...props} />;
  };

  Wrapped.displayName = `WithLogger(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default withLogger;
