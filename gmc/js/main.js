var Textaera=document.getElementById('txt');

function test(){
    document.getElementById('txt').style.fontWeight="bold"
}
 
  function changerBold() {
     if(Textaera.style.fontWeight="bold"){
        Textaera.style.fontWeight="normal"
     }
else{
    Textaera.style.fontWeight="bold";
}
}
function changeritalic() {
    if(Textaera.style.fontStyle=="italic"){
        
        Textaera.style.fontStyle="normal"
    }
else{
    Textaera.style.fontStyle="italic";
}
}

function changerInder() {
    if(Textaera.style.textDecoration="underline"){
        Textaera.style.textDecoration="none"
    }
else{
    Textaera.style.textDecoration="Underline";
}
}
function taille() {
    var x=document.getElementById("txt2").value;
    var y=document.getElementById("txt");
    y.style.fontSize=x;}

    function famille() {
        var x=document.getElementById("txt3").value;
    var y=document.getElementById("txt");
    y.style.fontFamily=x;   }
    



