const image = [
    'pic-1.jpg',
    'pic-2.webp',
    'pic-3.jpg' ,
    'pic-4.jpeg' ,
    'pic-5.jpg' ,
    'pic-6.webp' ,
] ;
const showImage = document.getElementById('img') ;
let imageIndex = 0
setInterval (() => {
    if (imageIndex >= image.length){
        imageIndex = 0 ;  
    }
    const imageUrl = image[imageIndex] ;
    imageIndex ++ ;
    console.log (imageUrl) ;
    showImage.setAttribute ('src' , imageUrl)
}
, 1000) ;
