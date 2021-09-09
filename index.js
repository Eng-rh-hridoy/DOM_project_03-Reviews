const reviews = [
    {
        id: 1,
        img: "images/person-1.png",
        name: "Laster Nole",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit minus alias distinctio cum deserunt dolor repellat est doloremque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur velit officia maiores illo expedita quam non nam odit earum!"
    },
    {
        id: 2,
        img: "images/person-2.png",
        name: "Graly Rel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit minus alias distinctio cum deserunt dolor repellat est doloremque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur velit officia maiores illo expedita quam non nam odit earum!"
    },
    {
        id: 3,
        img: "images/person-3.png",
        name: "Mlay More",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit minus alias distinctio cum deserunt dolor repellat est doloremque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur velit officia maiores illo expedita quam non nam odit earum!"
    },
    {
        id: 4,
        img: "images/person-4.png",
        name: "Gorel Lopse",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit minus alias distinctio cum deserunt dolor repellat est doloremque eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur velit officia maiores illo expedita quam non nam odit earum!"
    }
];

let currentIndex = 0;
const personImg = document.querySelector(".person-img");
const personName = document.querySelector(".person-name");
const personReview = document.querySelector(".person-review");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

prevBtn.addEventListener("click", function(){
    if(currentIndex == 0){
        currentIndex = reviews.length - 1;
    }else{
        currentIndex --;
    }
    person();
});

nextBtn.addEventListener("click", function(){
    if(currentIndex == reviews.length - 1){
        currentIndex = 0;
    }else{
        currentIndex ++;
    }
    person();
});

randomBtn.addEventListener("click", function(){
    currentIndex = randomNumber();
    person();
});



// function for generate person
function person(){
    personImg.src = reviews[currentIndex].img;
    personName.innerText = reviews[currentIndex].name;
    personReview.innerText = reviews[currentIndex].text;
}

// function for generate random number 
function randomNumber(){
    return Math.floor(Math.random() * reviews.length);
}