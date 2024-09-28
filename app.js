let container = document.getElementById('img-container');
let x = 1;

const fetchImg = async() =>{
    let imgUrl = '';
    try{
        const response = await fetch('https://picsum.photos/480/600');
        imgUrl = response.url;
    }
    catch(e){
        console.log('The API is not working correctly');
    }
    return imgUrl;
    
}

const fetchmobileImg = async() => {
    let imgUrl = '';
    try{
        const response = await fetch('https://picsum.photos/280/350');
        imgUrl = response.url;
    }
    catch(e){
        console.log('The API is not working correctly');
    }
    return imgUrl;
}

const loadImg = async() => {
    while(true){
        if(x>30)
            break;
        const screen_size = window.innerWidth;
        let url;
        if(screen_size<320){
            url = await fetchmobileImg()
        }
        else{
            url = await fetchImg();
        }
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Random generated image ${x}`;
        li.appendChild(img);
        li.classList.add('li-container')
        container.appendChild(li);
        x++;
    }
}

loadImg()