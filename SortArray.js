// bubble sort methode (dédicace Mr.Babaali)
function sort(array){
    let j = array.length;
    do{
       for (var i = 0; i < j; i += 1) {
           if (array[i] > array[i+1]){
             let x = array[i+1];
             array[i+1] = array[i];
             array[i] = x;
           }
       }
                  j = j-1;
    }while(j !== 0);
   return array; 
}
var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
sort(arr);
console.log(arr);