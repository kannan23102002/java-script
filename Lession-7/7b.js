function ctf(celsius){
   return(celsius*9/5 +32);
}

function ctc(fahrnheit){
   return((fahrnheit-32 )*5/9);
}

function ct(degree,unit){
   if (unit==='C'){
      const result=ctf(degree);
      return `${result} 'F'`;
   }else{
      const result=ctc(degree);
      return `${result} 'C'`;
   }
}
console.log(ct(25,'F'));

