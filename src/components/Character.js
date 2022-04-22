// Write your Character component here
// Write your Character component here
import React, {useState, useEffect} from "react";
// const [character, setCharacter] = useState()
import styled from 'styled-components'

const Content = styled.div`
border: 2px solid black;
display: flex;
justify-content: center;
h1: hover {
color: blue;
background: grey;
}
`
const Button = styled.div`
width: 50%;
max-width: 40rem;
margin: 2rem;
border: 1px solid black;
padding: 1rem;
`

const Character = (props) => {
    return (
        <Content>
            <div className='starWarsChar'>
                <h1>{props.char.name}</h1>
            </div>
        </Content>
    )
}



export default Character