const sessionIDToUserMap=new Map();


function setUser(id,user){
    sessionIDToUserMap.set(id,user);
    
}

function getUser(id){
    const result= sessionIDToUserMap.get(id);
    return result;

}

module.exports={setUser,getUser};