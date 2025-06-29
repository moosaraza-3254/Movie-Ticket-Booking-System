

const TimeFormat = (minutes) => {
    const hours=Math.floor(minutes/60);
    const minutesRem=minutes%60;
   return `${hours}h ${minutesRem}m`
}
export default TimeFormat