document.getElementById("generate").addEventListener('click', randomdogimage);
function randomdogimage(){
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json() )
    .then(data => {console.log(data);
   

    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        document.getElementById('image').src=data.message;
    })
})
}