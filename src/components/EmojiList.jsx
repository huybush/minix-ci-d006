import { Emoji } from "./Emoji";
import {emojiList } from "../resources/emojiList";

export function EmojiList(props) {
    const lists = []

    for (let i = 0 ;  i<=20;i++){
        console.log(emojiList[i])
        lists.push(
            <Emoji  {...emojiList[i]}/>)
    }
    return (
        <div>
           {
               lists
           }
        </div>
    )
    
}
    