import React, { useState } from 'react';
import Header from '@/components/mostamarComponents/modules/Header';
import Footer from '@/components/mostamarComponents/modules/Footer';


const MostamarLayout = ({children}) => {
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

export default MostamarLayout;