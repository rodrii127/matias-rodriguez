import React from 'react';
import { Sidebar } from './Sidebar';
import "../blog-management/responsive/Sidebar.css";
import SidebarResponsive from '../blog-management/responsive/SidebarResponsive';
import { NothingSelected } from './NothingSelected';

export const BlogAdministrator = () => {

    const tamanio = window.innerWidth;

    return (
        <div id='App' className='journal__main-content'>
            {tamanio < 800
                ? <>
                    <SidebarResponsive pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    
                </>
                :
                <Sidebar />
            }

            <main style={{width:'100%'}}>
                <NothingSelected />
            </main>
        </div>
    )
}
