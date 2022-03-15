// EXO1 :

function sup(arr,val){
    var array = [];    
    let j = 0;
        for( var i = 0; i < arr.length; i++){ 
                                       
            if ( arr[i] !== val) { 
                array[j] = arr[i]; 
                j = j+1;
            }
        }
        arr = array;
        return console.log(arr);
    }
    var myarray = [3, 2, 3, 4, 0, 5, 6, 7, 8, 5, 10, 3];
    sup(myarray,3);
    
//------------------------------------------------------------//

// EXO2 :
    
function SupSorted(arr){
    var array = [];
    let j = 0;
        for( var i = 0; i < arr.length; i++){ 
            if ( arr[i] !== arr[i+1]){ 
            array[j] = arr[i];
            j = j+1;
            }
            }
     
        arr = array ;
        return console.log(arr);
    }
    var myarray = [0, 1, 1, 2, 3, 3, 3, 4, 5, 5, 9, 10, 12, 12, 13, 14, 14, 15];
    SupSorted(myarray);