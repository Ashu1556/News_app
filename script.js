const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");

//const category = document.querySelectorAll(".link1");
const category1 = document.getElementsByClassName("link1");
 

const attachdata = document.getElementById("attachdata");
const attachdata1 = document.getElementById("attachdata1");






init();

//const apikey = "2f09a9c1efa848d6ae5927678b6a6b60";

function init(){

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("open");
    });
    });
    
    overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
  });


   for(let i = 0; i<category1.length; i++){
    let html = "";
    let value = category1[i].innerText;
    category1[i].addEventListener("click" , async () =>{
      const api = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=2f09a9c1efa848d6ae5927678b6a6b60`);
      const data = await api.json();
      console.log(data.articles.length);
      for(let i = 0; i<data.articles.length; i++){
        let image = data.articles[i].urlToImage;
        let description = data.articles[i].description;
        let title =  data.articles[i].title;
        let publisheddate = data.articles[i].publishedAt;
        let url = data.articles[i].url;



        console.log(data.articles[i].title);
        console.log(data.articles[i].description);
        console.log(data.articles[i].content);
        html += `  <div class="main-container">
                     <div class="main-container121">
                      <div class="main-container11">
                        <img src="${image}" alt="image" style="height:100%; width:100%;" />
                      </div>
                      <div class="container22">
                        <p>${title}}</p>
                        <p class="text">short by CNVCTV18.com<span>${publisheddate}</span></p>
                        <p>${description}</p>
                        <p class="text1">read more at<a href="${url}" target="blank">CNBCTV18</a></p>
                      </div>
                      </div>


                    </div>`
  

      }
      //How to add per page 10 shows 
      attachdata.innerHTML = html;


    })

    console.log(category1[i].innerText);

   }
  // category.forEach((item) =>{
  //   let value = category[item].innerText;
  //   console.log(value);
  //   item.addEventListener("click", async () =>{
      
  
  //   } )
  // })
  async function render(){
    const api = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=2f09a9c1efa848d6ae5927678b6a6b60");
    const data = await api.json();
   console.log(data);
   //console.log(data.title);
   for(let i = 0; i< data.articles.length; i++){
    let html = " ";
    console.log(data.articles[i].title);
    let image = data.articles[i].urlToImage;
    let description = data.articles[i].description;
    let title =  data.articles[i].title;
    let publisheddate = data.articles[i].publishedAt;
    let url = data.articles[i].url;
    html += `  <div class="main-container">
                <div class="main-container121">
                  <div class="main-container11">
                    <img src="${image}" alt="image" style="height:100%; width:100%;" />
                  </div>
                  <div class="container22">
                    <p>${title}}</p>
                    <p class="text">short by CNVCTV18.com<span>${publisheddate}</span></p>
                    <p>${description}</p>
                    <p class="text1">read more at<a href="${url}" target="blank">CNBCTV18</a></p>
                  </div>
                </div>


              </div>`

   attachdata1.innerHTML = html;
   }
   

  }
  render();

}