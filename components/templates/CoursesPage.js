import React from 'react';
import FirstBanner from '../modules/courses/FirstBanner';
import Link from 'next/link'
import CoursesSection from '../modules/courses/CoursesSection';
import Image from 'next/image';

const CoursesPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        {/* <TestsSection /> */}
                        <div className='col-12 text-center'>
                        <CoursesSection />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default CoursesPage;