import {Component} from 'react'

 function SearchBar(props) {
     
    const {change,kw} = props
        return(
            <div>
                <input type="text" placeholder="enter text"  onChange={change} value={kw}/>
            </div>
        )
    

}


export{SearchBar}