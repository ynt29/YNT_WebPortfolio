let showBlog = document.getElementById("blog-content")
var blog = {};
function readMore(name) {
    console.log(name)
}
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.blog_list) 
        for(i = 0; i < data.blog_list.length; i++) {
            console.log(data.blog_list[i].subtitle)
            showBlog.innerHTML += `
            <div class="container">
            <h1 class="d-flex align-items-center justify-content-center mt-6">
            ${
                data.blog_list[i].name
            }
            </h1>
            <img src="${
                data.blog_list[i].img
            }" alt="${
                data.blog_list[i].name
            }">
            </img>
            <button class="btn btn-primary" onclick="readMore('${
                data.blog_list[i].name
            }')">Read More ...</button>
            </div>
            `

        }
        
    });

