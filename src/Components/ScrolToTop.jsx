import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const ScrolToTop = () => {
    const { pathname } = useLocation();

    useEffect(()=> {
        window.scroll(0,0)

    },[pathname])
  return null;
}

export default ScrolToTop