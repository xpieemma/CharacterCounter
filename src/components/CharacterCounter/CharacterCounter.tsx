import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";


function CharacterCounter({minWords = 25,maxWords=100}:CharacterCounterProps){
  
    const [text, setText ]= useState('');

    const calculateStats = (aString : string): TextStats => {
             const strLength = aString.length;
 
             const countingWord = aString.trim() === "" ? 0 : aString.trim().split(/\s+/).length; 

             const readingTimeMinutes = Math.floor(countingWord/200) ; 
             const readingTimeSeconds = Math.ceil((countingWord/200 - readingTimeMinutes)*60);
             const readingTime = `${readingTimeMinutes}: ${readingTimeSeconds.toString().padStart(2, "0")}`;
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

<p style={{color: overTheLimit ? "red" : "green"}}> 
    {overTheLimit ? " It is exceed the limit": " within the limits"} </p>

    <div>
        <p>Characters: {textStats.characterCount}</p>
<p>Words: {textStats.wordCount}</p>
<p>Reading Time: {textStats.readingTime} min</p>
    </div>
</div>
    );
}
export default CharacterCounter;