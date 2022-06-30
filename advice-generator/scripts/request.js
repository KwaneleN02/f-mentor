class EasyHTTP 
{
    get(url)
    {
        fetch(url)
        
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}