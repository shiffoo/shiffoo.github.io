var timeVar='';
body           = document.querySelector('body');
service_button_hair         = document.querySelector('#service_button_hair');
button_hair_content        = document.querySelector('#button_hair_content');

service_button_hair.onclick = function()
{
    if(button_hair_content.style.display == "block")
    {
    button_hair_content.style = "display: none"; 
    }
    else
    {
    button_hair_content.style = "display: block"; timeVar = 1;  
    }
}
button_hair_content.onclick = function()
{
timeVar = 1;  
}
body.onclick = function()
{
    if(!timeVar)
    {
    button_hair_content.style = "display: none"; 
    }
    if(timeVar) { setTimeout(function(){ timeVar=''; }, 100);}  
}





var timeVar1='';
body           = document.querySelector('body');
service_button_nails         = document.querySelector('#service_button_nails');
button_nails_content        = document.querySelector('#button_nails_content');

service_button_nails.onclick = function()
{
    if(button_nails_content.style.display == "block")
    {
    button_nails_content.style = "display: none"; 
    }
    else
    {
    button_nails_content.style = "display: block"; timeVar1 = 1;  
    }
}
button_nails_content.onclick = function()
{
timeVar1 = 1;  
}
body.onclick = function()
{
    if(!timeVar1)
    {
    button_nails_content.style = "display: none"; 
    }
    if(timeVar1) { setTimeout(function(){ timeVar1=''; }, 100);}  
}