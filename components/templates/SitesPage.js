import React from 'react';
import FirstBanner from '../modules/Sites Page/FirstBanner';
import SitesSection from '../modules/HomePage/SitesSection';

const SitesPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        <div className='col-12 text-center'>
                        <SitesSection />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default SitesPage;