/* ทำการดึง Data มา เก็บไว้ในตัวแปร song*/
let blogText = document.getElementById("blog-content") 
let song = fetch("./data.json")
/* then เพราะ data ตอนนี้เป็น raw data*/
.then(function(response) {
/* แปลงจาก raw เป็น JSON*/
   return response.json();
})
.then(data =>  {return data});
// let cokwid = fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
// .then(function(response) {
//     return response.json();
// })
// .then(data => {return data});

// cokwid.then(function(response) {
//     console.log(response)
// })
console.log(song)

song.then(function(response) {
    console.log(response)
    for(var i = 0; i < response.data.length; i ++){
    console.log(blogText)
    if (i%2 == 0) {
        blogText.innerHTML += 
        `
        ${
            Math.random()*100
        }
        <h5 class="my-5">
        ${
            response.data[i] 
        }
        </h5>
        <div class="bg-danger">
        ${
            response.data[i].name + " " + "เพลง " +
            response.data[i].subtitle 
        }
        </div>
        `
    }
    else {
        blogText.innerHTML += 
        `
        <h5 class="my-5">
        ${
            response.data[i]
        }
        </h5>
        <div class="bg-success">
        ${
            response.data[i].name + " " + "เพลง " +
            response.data[i].subtitle 
        }
        </div>
        `
    }

}
})