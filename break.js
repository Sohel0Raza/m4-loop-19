for(var i = 0; i < 7; i++ ){
    console.log(i)
    if(i > 3){
        break;
    }
}

var roomItems =['pen', 'book', 'mouse', 'phone', 'table', 'madicine', 'shop', 'pant']
for(i = 0; i < roomItems.length; i++){
    item = roomItems [i];
    if(item == 'table'){
        break;
    }
    console.log(item)
}