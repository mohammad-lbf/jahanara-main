import darsnameh from '@/DB/sevom/darsnameh';
import mohtava from '@/DB/sevom/mohtava';
import soalat from '@/DB/sevom/soalat';
import tarhedars from '@/DB/sevom/tarhedars';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToolsMenuOption from '../ToolsMenuOption';


const ToolsMenu = () => {
    return (
        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0 d-flex justify-content-center'>
                <ToolsMenuOption type={"soalat"} number={soalat.length} slug="/sevom/soalat" />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"tarhedars"} number={tarhedars.length} slug={"/sevom/tarhedars"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"mohtava"} number={mohtava.length} slug={"/sevom/mohtava"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <ToolsMenuOption type={"darsnameh"} number={darsnameh.length} slug={"/sevom/darsnameh"}  />
            </div>
        </div>
        </div>
    );
};

export default ToolsMenu;