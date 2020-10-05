import React, {useEffect, useState} from 'react'
import pohjapiirros from './img/Pohjapiirros.png'
import styled from 'styled-components'
import Mittarilukema from './Mittarilukema'

function Pohjapiirros(props){

    const [temp, setTemp] = useState(-1000)
    const [click, setClick] = useState(0)
    const [setup, setSetup] = useState(false)

    useEffect(() => {
        setTemp(20)

        fetch('https://cryptic-shore-23134.herokuapp.com/api/temp')
            .then(response => response.json())
            .then(data => parseFloat(data[data.length-1].temp))
            .then(viimeisinLampo => setTemp(viimeisinLampo.toFixed(2)))

        const interval = setInterval(() => {
           
            fetch('https://cryptic-shore-23134.herokuapp.com/api/temp')
            .then(response => response.json())
            .then(data => parseFloat(data[data.length-1].temp))
            .then(viimeisinLampo => setTemp(viimeisinLampo.toFixed(2)))


        },5000) // TODO Päivitys aika voitaisiin laittaa asetuksista ja tuoda propsina
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    const clickListener = (e) => {
        
        console.log("client x "+e.clientX)
        console.log("client y "+e.clientY)
    }


    return(
        <div>
            <BorderedImage onClick={clickListener} src={pohjapiirros} alt="Pohjapiirustus"/>
            <Mittarilukema background="red" temp={temp}></Mittarilukema>
        </div>
    );
}


const BorderedImage = styled.img`
    border: 3px solid grey;
    border-radius: 1px;
`

export default Pohjapiirros
