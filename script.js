const data = [
    {
        header:"Discover innovative ways to decorate",

        paragraphs:`We provide unmatched quality, comfort, and style for property
        owners across the country.Our experts combineform and function
        in bringing your vision to life. Create a room in your owner
        style with our collection and make your property a reflection of
        you and what you love.`,

        image:"/image/desktop-image-hero-1.jpg"
    },
    {
       header:"We are available all across the globe",

       paragraphs:`With stores all over the world. it's easy to find furniture for
        you home or place of business. Locally, we're in most major 
        cities throughout the country. Find the branch nearest you using
        our store locator. Any question? Don't hesitate to contact us today`,

        image:"/image/desktop-image-hero-2.jpg"
    },
    {
        header:"Manufactured with the best materials",

        paragraphs:`Our modern furniture store provide a high level of quaity. Our
        company has invested in advanced technology to ensure that
        every product is made as perfect and as consistent as possible.
        With three decades of experience in this industry. we understand
        what customers want for their home and office.`,

        image:"/image/desktop-image-hero-3.jpg"

        
    }
];
//const topLeftDivTag = document.querySelector(".topLeftDiv");
const imageContainerTag =document.querySelector(".imageContainer");
const paraContainerTag =document.querySelector(".paraContainer");

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow")


for (let i = 0; i < data.length; i++) {
    imageContainerTag.innerHTML += `<img src="${data[i].image}" class="image" id = img${i}>`
    
}
const image1Tag = document.querySelector("#img1");

let index=0;
let slideLength =0;


const leftArrowFunction = () => {
    paraContainerTag.innerHTML ="";
    if(index == 0) {
        index= 2
        slideLength = image1Tag.offsetWidth + image1Tag.offsetWidth;
        imageContainerTag.style.transform =`translateX(-${slideLength}px)`
        slide(index);
        
    }else{
        if(index == 1){
            index -= 1;
            slideLength = 0
            imageContainerTag.style.transform =`translateX(-${slideLength}px)`
            slide(index);
        }else{
            index -= 1;
            
            slideLength -= image1Tag.offsetWidth
            imageContainerTag.style.transform =`translateX(-${slideLength}px)`
            slide(index);
           
        }
       
    }
};

const rightArrowFunction = () => {
    paraContainerTag.innerHTML ="";
    if(index == 2) {
        index=0
        slideLength=0;
        slide(index);
        imageContainerTag.style.transform =`translateX(-${slideLength}px)`
        
    }else{
        if (index == 1) {
            index += 1;
            slideLength += image1Tag.offsetWidth
            imageContainerTag.style.transform =`translateX(-${slideLength}px)`
            slide(index);
        }else{
            index += 1;
             slideLength += image1Tag.offsetWidth
            imageContainerTag.style.transform =`translateX(-${slideLength}px)`
            slide(index);
        }
        
    }
   
}

leftArrow.addEventListener("click" , () => {
    leftArrowFunction();
    
});
rightArrow.addEventListener("click" , () => {
    rightArrowFunction();
});


 
function slide (num) {
        paraContainerTag.innerHTML=`<h1>${data[num].header}</h1>
        <span>${data[num].paragraphs}</span>`
}

let x = window.matchMedia("(max-width: 600px)")

function mediaFunction (num) {
    
    if (num.matches == true) {
       
        const iconTag = document.querySelector(".fa-bars");
        const menuBar = document.getElementsByClassName('menuBar')[0];
        const coverTag = document.createElement("div")
            coverTag.innerHTML =` 
            <i class="fa fa-times" id = "S1"></i>
            <ul>
                <li>homes</li>
                <li>services</li>
                <li>about us</li>
                <li>contact us</li>
            </ul>`
        menuBar.append(coverTag);
        coverTag.classList.add("cover")
        const removeIconTag = document.querySelector("#S1");
        console.log(removeIconTag)
        
        iconTag.addEventListener("click" , () =>{
            iconTag.style.opacity = "0"
            coverTag.classList.add("opened")
            removeIconTag.style.display = "block"
        });

        removeIconTag.addEventListener("click" , () =>{
            coverTag.classList.remove("opened")
            iconTag.style.opacity = "1";
        });
    }else{
        return
    }
}
mediaFunction(x)