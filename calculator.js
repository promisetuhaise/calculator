function deleteLast(){
    document.getElementById('result').value;
    document.getElementById('result').value=result.substring(0,result.length-1);
}
function clearScreen(){
    document.getElementById('result').value="";

}
function insert(value){
    document.getElementById('result').value+=value;
}
function calculator(){
    try{
        let result=eval(  document.getElementById('result').value);
        document.getElementById('result').value=result;
} catch(e){
    document.getElementById('result').value="error";
}
}