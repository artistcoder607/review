const reviews = [
    {
        imgSrc: "./pics/1.jpg",
        name: "Ali Khan",
        jobTitle: "Software Engineer",
        description: "Great platform! The user interface is smooth and the features are exactly what I need. Highly recommend it to others."
    },
    {
        imgSrc: "./pics/2.jpg",
        name: "Sarah Malik",
        jobTitle: "Product Manager",
        description: "I had an amazing experience using this service. The customer support was responsive and resolved my issues promptly."
    },
    {
        imgSrc: "./pics/3.jpg",
        name: "Zain Ahmed",
        jobTitle: "Graphic Designer",
        description: "The design tools provided are top-notch. I was able to create professional work easily and efficiently."
    },
    {
        imgSrc: "./pics/4.jpg",
        name: "Maya Iqbal",
        jobTitle: "Marketing Specialist",
        description: "This tool has helped me streamline my marketing campaigns. It's easy to use and saves me a lot of time."
    },
    {
        imgSrc: "./pics/5.jpg",
        name: "Omar Farooq",
        jobTitle: "Data Analyst",
        description: "The analytics dashboard is incredibly useful. I can track and analyze data with ease and make better decisions."
    },
    {
        imgSrc: "./pics/6.jpg",
        name: "Hira Baig",
        jobTitle: "HR Manager",
        description: "It's a very effective tool for managing employee performance. I can quickly assess progress and provide timely feedback."
    }
];

let count = 0
let userimg = document.querySelector("img")
let username = document.querySelector(".name")
let userjob = document.querySelector(".job")
let userdes = document.querySelector(".description")


function next() {
    count++
    if (count == 6) {
        count = 0
    }
    console.log(count);
userimg.src = reviews[count].imgSrc
username.innerHTML = reviews[count].name
userjob.innerHTML = reviews[count].jobTitle
userdes.innerHTML = reviews[count].description
}

function back() {
    count--
    if (count < 0) {
        count = 5
    }
    console.log(count);
userimg.src = reviews[count].imgSrc
username.innerHTML = reviews[count].name
userjob.innerHTML = reviews[count].jobTitle
userdes.innerHTML = reviews[count].description
}