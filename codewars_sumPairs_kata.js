function sumPairs(ints, s) {

  let counter = 0;
  let matchingPairs = [];
  for ( let i = 0; i < ints.length - 1; i++) {
    for ( let j = i + 1; j < ints.length; j++) {
      if ( ints[i] + ints[j] === s ) {
        matchingPairs.push([ints[i], ints[j], j]);
        counter++;
      }  
    } 
  }
  if ( counter === 0 ) { return undefined; }

  
  if ( matchingPairs.length === 1) { 
    matchingPairs[0].pop();
    return matchingPairs[0];
  }
    console.log(matchingPairs);
  let tempAnsArr = [];
  for ( let i = 0; i < matchingPairs.length - 1; i++) {

    if ( matchingPairs[i+1][2] < matchingPairs[i][2] ) {
      tempAnsArr = matchingPairs[i+1];
    } else {
      tempAnsArr = matchingPairs[i];
    }
  }
  tempAnsArr.pop();
  return tempAnsArr;
    
}