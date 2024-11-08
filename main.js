const imageContainer=document.querySelector("#showcase");
const galleryContainer=document.querySelector("#gallery");

let data = [
  { src: "Images/6.jpeg" },
  { src: "Images/5.jpeg" },
  { src: "Images/4.jpeg" },
  { src: "Images/3.jpeg" },
  { src: "Images/2.jpeg" },
  {src: "Images/1.jpeg"},
];
let galleryData = [
  // {src:"Gallery/_ (1).jpeg"},
  // {src:"Gallery/_ (2).jpeg"},
  // {src:"Gallery/_ (3).jpeg"},
  // {src:"Gallery/_ (4).jpeg"},
  {src:"Gallery/a.jpeg"},
  {src:"Gallery/4lveros.jpeg"},
  {src:"Gallery/2.jpeg"},
  {src:"Gallery/5.jpeg"},
  {src:"Gallery/8.jpeg"},
  { src: "Images/6.jpeg" },
  
]


let source="";
data.forEach((elem,index) =>{

    // Set angle for rotation, but skip rotation for the top image
    let angle = (index === data.length - 1) ? 0 : (index % 2 === 0 ? index + 2 * 8 : -index * 8);
   source +=`<img src= ${elem.src} style="rotate:${angle}deg"  ; alt="Image"></img>`
 
});
imageContainer.innerHTML+=source;

let gallerySource="";
galleryData.forEach((elem)=>{
  gallerySource += ` <img src=${elem.src} alt="image">`
});
console.log(gallerySource);
galleryContainer.innerHTML+=gallerySource;
