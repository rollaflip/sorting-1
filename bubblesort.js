function bubbleSort(arr){
    let bubbleLimit = arr.length - 1;
    while(bubbleLimit > -1){
        for(let i = 0; i < bubbleLimit; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                //console.log(arr[i], arr[i + 1])
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        bubbleLimit--;
    }
    return arr;
}
