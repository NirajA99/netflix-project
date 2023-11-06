export const truncateText = (str, num)=>{
    if (str) {
        if (str.length < num) {
        return str; 
        }
        else{
            return str.slice(0, num) + '...';
        }
    }
    
}
export const time = (time)=>{
      let hours = Math.trunc(time/60);
      let minutes = time % 60;
      return(hours +":"+ minutes + ' min');
    }

    export const shuffle=(array)=>{
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }