// import React, { createRef } from "react";

// const DocumentsAddProp = () => {
//   const textInput = createRef();
//   const colorGround = createRef();
//   const focusTextInput = () => textInput.current.focus();
//   const changeColor = () => colorGround.current.style.backgroundColor = 'red'

//   return (
//     <>
//       <p ref={colorGround}>dsdfffdf</p>
//       <input type="text" ref={textInput} />
//       <button onClick={changeColor}>Ustaw</button>
//     </>
//   );
// };

// export default DocumentsAddProp;

// context.js
import React, { createContext, useContext,useState } from "react";

const LanguageContext = React.createContext({
    language: "en",
    setLanguage: () => {}
  });  
  
  //LanguageSwitcher.js Context Consumer
  const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    
    return (
        
      <button onClick={() => setLanguage("jp")}>
        Switch Language (Current: {language})
      </button>
    );
  };
  const InnyButton = () => {
    const { handleIsActive } = useContext(LanguageContext);
    return ( <>
<button onClick={handleIsActive}>Zmień Active</button>
    </> );
}
  // App.js
  const DocumentsAddProp = () => {
    const handleIsActive =() => {
        setActive(!active)
        console.log(active);
    }
    const [language, setLanguage] = useState("en");
    const [active, setActive] = useState(false);
   const value = { language, setLanguage,active,setActive,handleIsActive };
     
    //  const AppContext = createContext()
   
    return (
      <LanguageContext.Provider value={value}>
        <h2>Current Language: {language}</h2>
        <h1>Inne:{active.toString()} </h1>
        <p>Click button to change to jp</p>
        <div>
          {/* Can be nested */}
          <LanguageSwitcher />
          <InnyButton />
        </div>
      </LanguageContext.Provider>
    );
  };
  export default DocumentsAddProp;