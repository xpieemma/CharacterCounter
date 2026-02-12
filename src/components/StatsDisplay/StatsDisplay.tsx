import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ 
    stats, 
    showReadingTime = true,
}) => {
    const {CountChar, CountWords, timeReading}= stats;
    return (
        <div>

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