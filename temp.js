async function  f(){

    
await fetch("google.com").then(()=>{
    console.log("success");

}).catch((err)=>{
    console.log("err occured");
});

}
f()