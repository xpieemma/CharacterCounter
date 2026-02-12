import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";


function CharacterCounter({minWords = 0,maxWords=10}:CharacterCounterProps){
  
    const [text, setText ]= useState('');

    const calculateStats = (aString : string): TextStats => {
             const strLength = aString.length;

            //  if empty (zero) if not split with " "...  
             const countingWord = aString.trim() === "" ? 0 : aString.trim().split(/\s+/).length; 

             const readingTime = Math.ceil(countingWord/200) ; // how long it takes to read the txt

             return {
                characterCount : strLength, 
                wordCount: countingWord,
                readingTime

             }
    };
            const textStats =   calculateStats(text);

            // const overTheLimit = textVar.wordCount > maxWords;
             const overTheLimit = textStats.wordCount > maxWords;

            // const overTheLimit = maxWords > 0 ?  Math.min((textVar.wordCount / maxWords)) : 0;

            const handleChange = (aText : string) => {
                setText(aText)
            }
    return (
<div>
    <h2>
        Content Checking
    </h2>
<TextInput 
onTextChange={handleChange}
placeholder="Enter your text" />

<StatsDisplay 
stats={textStats} 
showReadingTime ={true}/>

<span> Target : {minWords} - {maxWords}</span>

{overTheLimit ? " It is exceed the limit": " within the limits"}
</div>
    );
}
export default CharacterCounter;