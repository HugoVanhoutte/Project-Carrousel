const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");
const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
imgList = [
    "/images/test0.jpg",
    "/images/test1.jpg",
    "/images/test2.jpg",
    "/images/test3.jpg",
    "/images/test4.jpg",
]
let currentImg = 0;
prevArrow.addEventListener("click", () => {
    currentImg--;
    if (currentImg < 0){
        currentImg = imgList.length-1;
    } else {
    }
    img.src = imgList[currentImg];
    console.log(currentImg);
})

nextArrow.addEventListener("click", () => {
    currentImg++;
    if (currentImg > imgList.length-1){
        currentImg = 0;
    } else {
    }
    img.src = imgList[currentImg];
    console.log(currentImg);
})

for (let i = 0; i < imgList.length; i++) {
    let newButton = document.createElement("button");
    newButton.style.width = "1rem";
    newButton.style.height = "1rem";
    newButton.className = "button-index";
    buttons.append(newButton);
    newButton.addEventListener("click",  () => {
        currentImg = i;
        img.src = imgList[currentImg];
        console.log(currentImg);
    })
}