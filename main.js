var options = document.getElementById('options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','options');
    newField.setAttribute('class','options[]');
    newField.setAttribute('size',50);
    newField.setAttribute('placeholder','you produit and price');

    options.appendChild(newField);
}

remove_fields.onclick = function(){
    var input_tags = options.getElementsByTagName('input');
    if(input_tags.length > 2){
        options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}


/*============= navbar====*/
var menubtn = document.querySelector