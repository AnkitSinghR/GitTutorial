console.log("Ajax tutorial");
let fetchButton = document.getElementById("fetchBtn")
fetchButton.addEventListener("click", ButtonClickFuction)
function ButtonClickFuction() {
    const xhttp = new XMLHttpRequest();//creating object-
    xhttp.onprogress = function () {//optional it is used for loader and spinner
        console.log("on Progress")
    }
    xhttp.onreadystatechange=function(){
        console.log("ready state is",xhttp.readyState);//it is mainly show ready state
    }
    xhttp.onload = function () {
        if(this.status===200){
            document.querySelector("h6").innerHTML = this.responseText
            console.log(this.responseText);
        }
        else{
            console.error(this.statusText)
        }
    }
    //xhttp.open("GET", "List0fUnusedScreen1.txt", true);//open the object
    //xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    //xhttp.send();//send the request
    //POST REQUEST
    var params={"name":"Ankit","salary":21000,"age":21}
    xhttp.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhttp.send(params);
    console.log("We are done");//it will print befor progress bcz it is asyn call so it didn't block
}
