import React, { useState } from "react";
import axios from "axios";
import './App.css'


const App = ()=>{
    const [adviceOnScreen, setAdviceOnScreen] = useState('If you wanna get some advice, just click the button below!')
    const [backgroundPhoto, setBackgroundPhoto] = useState('https://source.unsplash.com/random')

    const adviceApi = ()=> axios.get('https://api.adviceslip.com/advice').then((response)=>{
        const {advice} = response.data.slip
        setAdviceOnScreen(advice)
    })

    const backgroundApi = ()=> axios.get('https://source.unsplash.com/random').then((response)=>{
        const {responseURL} = response.request
        setBackgroundPhoto(responseURL)
    })


    return(
        <div className="app" style={{backgroundImage: `url(${backgroundPhoto})`}}>
            <div className="card">
                <div className="header">{adviceOnScreen}</div>
                <button className="changeAdvice" onClick={()=>setTimeout(() => {
                    {backgroundApi(); adviceApi();}
                }, 1000)}>Click</button>
            </div>
        </div>
    )



}


export default App