function range(start, end, step){
  var array = [];
  if( start === undefined || end === undefined || step === undefined || end < start || step < 0 ){
    array = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      array.push(i);
    }
  }
  return array;
}