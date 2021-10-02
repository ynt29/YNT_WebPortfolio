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
                   <div class="col-4 d-flex justify-content-center mt-4">
                        <div class="card skills-pic w-100 d-flex align-items-between h-100">
                            <div class="wrapper-blog-pic">
                                <img class="card-img-top w-75 d-block mx-auto" src="${
                                     data.blog_list[i].img
                                      }" alt="${
                                      data.blog_list[i].name
                                        }
                                        />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center">${
                                    data.blog_list[i].title
                                }</h5>
                                <h6 class="card-title d-flex justify-content-center">${
                                    data.blog_list[i].brief_content
                                }
                                </h6>
                                <button type="button"
                                class="btn btn-primary d-flex justify-content-center" 
                                onclick="readMore('${
                                    data.blog_list[i].name
                                }')">Read More ...</button>
                            </div>
                        </div>
                   </div>
            `

        }
        
    });
