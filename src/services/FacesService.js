export async function compareFaces() {

    try{
        const response = await fetch('/comparefaces');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}