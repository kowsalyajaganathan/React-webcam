export async function compareFaces() {

    try{
        console.log("in service");
       const response = await fetch('https://5l4jeuu4ng.execute-api.us-east-1.amazonaws.com/dev/comparefaces');
        return await response.json(); 
        
     /*  const url ='https://5l4jeuu4ng.execute-api.us-east-1.amazonaws.com/dev/comparefaces'

        var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null);
console.log(request.responseText);*/

    }catch(error) {
        return [];
    }
    
}

