import type { CharacterCounterProps, StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps & CharacterCounterProps> = ({ 
    stats, 
    showReadingTime = true,
    minWords = 25,
    maxWords = 100
}) => {
    const {characterCount, wordCount, readingTime}= stats;
    return (
        <div  className="flex gap-8 w-full p-4 border border-gray-300 rounded-lg">
<div>
    <h4>
        Characters
    </h4>
    <p> {characterCount}</p>
    {showReadingTime && (
        <div
        >
          <h4>Reading Time</h4>
          <p>{readingTime}</p>
        </div>
      )}
    </div>
    <div>
<h4>
     Words

</h4>
<p>{wordCount}</p>
<span>Min:{minWords} | Max: {maxWords}</span>

 
</div>
        </div>
    );
}


// function StatsDisplay(){

//     return (
// <div>

// </div>
//     );
// }
// export default StatsDisplay;