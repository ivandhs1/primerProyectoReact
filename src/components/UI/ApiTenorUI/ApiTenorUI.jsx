import React from 'react'
import {useState, useEffect, useRef} from 'react'

export const ApiTenorUI = () => {
    const [ state, setState] = useState("");
    const mainContainer = useRef(null);

    function start(event){
        let variable = event.target.value;
        console.log(event.target)
        setState(variable)
    }

    useEffect(() => {
        (state.length==0)? conectedTrending() : conected();
    },[state])

    function conectedTrending(){
        const URL = "https://g.tenor.com/v1/trending?key=";
        const Key = "7GDRPQ6NOEFC";
        const limit = "&limit=15";
    
        fetch(`${URL}${Key}${limit}`)
        .then(response => response.json())
        .then(data => { createGif(data) })
    }

    function conected(){
        const URL = "https://g.tenor.com/v1/search?";
        const Key = "7GDRPQ6NOEFC";
        const query = `q=${state}}`;
        const limit = "&limit=15";
    
        fetch(`${URL}${query}&key=${Key}${limit}`)
        .then(response => response.json())
        .then(data => { createGif(data) })
    }

    function createGif(data){
        eliminateChilds();
        console.log(data)
        data.results.map( gif => {
            const imgCard = document.createElement("img");
            imgCard.classList.add('img-gif');
            imgCard.src = gif.media[0].mediumgif.url;
            mainContainer.current.appendChild(imgCard);
        })
    }
    
    function eliminateChilds(){
    
        while(mainContainer.current.firstChild){
            mainContainer.current.removeChild(mainContainer.current.firstChild)
        }
    }

  return (
    <div className="cajaPadreApiTenor">
        <h1>Tenor - GIF</h1>
        <hr/>
        <input id="input-gif" type="text" onKeyUp={start} />
        <main ref={mainContainer} id="main-container">

        </main>
    </div>
  )
}
