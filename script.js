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

const imageContainerTag =document.querySelector(".imageContainer");
const paraContainerTag =document.querySelector(".paraContainer");

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow")

let index=0;

leftArrow.addEventListener("click" , () => {
    //imageContainerTag.innerHTML = "";
    paraContainerTag.innerHTML ="";
    if(index == 0) {
        index= 2
        slide(index);
        imageContainerTag.style.transform ="translateX(-1385px)"
    }else{
        if(index == 1){
            index -= 1;
            slide(index);
            imageContainerTag.style.transform ="translateX(0px)"
        }else{
            index -= 1;
            slide(index);
            imageContainerTag.style.transform ="translateX(-692px)"
        }
       
    }
    console.log(index)
});
rightArrow.addEventListener("click" , () => {
    //imageContainerTag.innerHTML = "";
    paraContainerTag.innerHTML ="";
    if(index == 2) {
        index=0
        slide(index);
        imageContainerTag.style.transform ="translateX(0px)"
    }else{
        if (index == 1) {
            index += 1;
        imageContainerTag.style.transform ="translateX(-1385px)"
        slide(index);
        }else{
            index += 1;
            imageContainerTag.style.transform ="translateX(-692px)"
            slide(index);
        }
        
    }
    console.log(index)
});


 
function slide (num) {
        paraContainerTag.innerHTML=`<h1>${data[num].header}</h1>
        <span>${data[num].paragraphs}</span>`
}
for (let i = 0; i < data.length; i++) {
    imageContainerTag.innerHTML += `<img src="${data[i].image}" class="image">`
    
}