import React from 'react';

function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    React.useEffect(() => {
      console.log(`Component ${WrappedComponent.name || 'Component'} mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name || 'Component'} unmounted`);
      };
    }, []);
    
    console.log(`Rendering ${WrappedComponent.name || 'Component'} with props:`, props);
    
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;