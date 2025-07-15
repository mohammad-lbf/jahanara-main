import React from 'react';
import FirstBanner from '../../mostamarComponents/modules/HomePage/FirstBanner';
import Properties from '../../mostamarComponents/modules/HomePage/Properties';
import CoursesSection from '../../mostamarComponents/modules/HomePage/CoursesSection';
import CustomSlider from '../../mostamarComponents/modules/HomePage/CustomSlider';
import MostamarLayout from '@/components/layout/MostamarLayout';


const HomePage = ({articles , courses}) => {
    return (
            <MostamarLayout>
                        <div className='cover-home-3 page-padding-tops'>
            <FirstBanner />
            {/* <IntroSection /> */}
            <div className='container-fluid'>
                <div className='row justify-content-center'>

                        <div className='mb-3 mt-3'>
                            <Properties />
                            <CoursesSection courses={courses} />
                            <CustomSlider articles={articles} />
                    </div>
                </div>
            </div>
        </div>
            </MostamarLayout>
    );
};

export default HomePage;