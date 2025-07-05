import React from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';

const Layout = ({children , theme , setTheme}) => {
    return (
        <div style={{}} className={`layout ${theme == "theme-night" ? "theme-night" : "theme-day"}`}>
            {/* <div className='w-100' style={{ background:"#151D3B" , position:"fixed" , zIndex:"90" , height:"120px"}}>
,
            </div> */}
            <Header theme={theme} setTheme={setTheme} />
                <main>
                    {children}
                </main>
            <Footer theme={theme} setTheme={setTheme}/>

        </div>
    );
};

export default Layout;