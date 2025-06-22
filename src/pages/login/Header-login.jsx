import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';


function HeaderLogin({ digitalStoreLogoUrl }) {
 

  return (
    <>
        <div className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <img src="public/assets/logo-header.svg" alt="" />
            </div>

        </div>
     
     
    </>
  );
}

export default  HeaderLogin;