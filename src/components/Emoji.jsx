import '../assets/css/Emoji.css'


function Emoji(props) {
    const {symbol,title} = props

    return(
        <div>
            {symbol}{title}
            
        </div>

    )
    
}

export {Emoji}