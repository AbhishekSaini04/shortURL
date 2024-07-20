function shortURLGenerator(n=8){
// const indicator=true;
    let shortURL='';
    const symbolString="aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(let i=0;i<n;i++){
        const randomNumber = Math.floor(Math.random() * 63);
        const letter=symbolString[randomNumber];
        shortURL=shortURL+letter;
        // console.log("i=",i);

        // if(i===n-1){
        //     dataBaseResult.map((data)=>{
        //         // console.log("fakeData=",data.shortURL);
        //         if(data.shortURL===shortURL){
        //             shortURL="";
        //             i=0;
        //             indicator=false;
        //         }
        //     });

        // }
    }
    // if(indicator){
    //     return shortURL;
    // }
return shortURL;
 
}

module.exports={shortURLGenerator};