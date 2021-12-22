$("button").click(function(){
$("#div1").load("FetchRestAPI.js",function(responseTxt,statusTxt,xhr){
    if(statusTxt==="Success"){
        alert("External content loaded successfully");
    }
    if(statusTxt==="error"){
        alert("Error : "+xhr.status+": "+xhr.statusText);
    }
});

// $.get("FetchRestAPI.js",function(data,status){
//     console.log(dat +"\n "+status);
// })get method
})
