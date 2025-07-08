import React, { useState } from 'react';
import Header from '../modules/Hamyar modules/components/modules/Header';
import Footer from '../modules/Hamyar modules/components/modules/Footer';


const HamyarLayout = ({children}) => {
      const [theme , setTheme] = useState("theme-day");


    return (
        <div style={{}} className={`layout ${theme == "theme-night" ? "theme-night" : "theme-day"}`}>
            <Header theme={theme} setTheme={setTheme} />
                <main>
                    {children}
                </main>
            <Footer theme={theme} setTheme={setTheme}/>

        </div>
    );
};

export default HamyarLayout;