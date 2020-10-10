import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
    color: white;
    position: absolute;
    top: 120px;
    left:70px;
    background: ${props => props.background};
    font-size: 20px;
    padding-left: 2%;
    `


function Mittarilukema(props){
    
    //TODO position pitää passata propseista

    //position vois esim tulla siitä että klikataan kuvaa, jossain setup tilassa?


    

    
    return(
    <Section background="cornflowerblue">Lämpötila {props.temp}°C</Section>
    )
}


export default Mittarilukema

