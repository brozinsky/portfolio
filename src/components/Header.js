import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyle className='header'>
            <h1 className='header-title'>_Lorem ipsum</h1>
            <h2 className='header-subtitle'>Dolor sit amet</h2>
            <HeaderButton>Click</HeaderButton>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;

.header-title{
    text-align: center;
    font-size: 5.5rem;
}

.header-subtitle{
    text-align: center;
    color: #fff;
    margin: 3rem;
    font-size: 3.5rem;
}
`
const HeaderButton = styled.button`
    margin: 0 auto;
    width: 200px;
    height: 55px;
    border: 1px solid #F13F3F;
    color: #F13F3F;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    background: #111;
    backdrop-filter: blur( 18.0px );    
    &:hover{
    border: 1px solid #F13F3F;
    background: #F13F3F;
    color: #111;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 8px 32px 0 rgba(135, 31, 31, 0.37);
    }
`


export default Header;
