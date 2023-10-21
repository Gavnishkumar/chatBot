import React from 'react';
import { createContext, useContext } from 'react';

const MyFunctionContext = createContext();


function MyFunctionProvider({ children }) {
  
    const scrollToBottom = (scrollableDivRef) => {
        // Access the scrollable div element using the ref
        const scrollableDiv = scrollableDivRef.current;
        
        // Scroll to the bottom
        if (scrollableDiv) {
          scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
        }
      };

  return (
    <MyFunctionContext.Provider value={scrollToBottom}>
      {children}
    </MyFunctionContext.Provider>
  );
}
export const ContextState=()=>{
    return useContext(MyFunctionContext);
}
export default MyFunctionProvider;
