import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header `
background-color: pink;
`
const Img = styled.img`
    width: 15vw;
    
    `



 


function Header() {

    return (

        <HeaderStyle>
     <Img src="" alt="logo flores" />
       <nav>
        <ul>
            <li>Inicio</li>
            <li>Arranjos de Flores</li>
            <li>Buques de flores</li>
            <li>Contatos</li>
        </ul>
       </nav>
        </HeaderStyle>
    )
}
export default Header