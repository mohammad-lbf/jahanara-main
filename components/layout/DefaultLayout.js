import React, { useState } from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';

const DefaultLayout = ({children}) => {
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

export default DefaultLayout;