// Load wallpapers
function loadran(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=cool+wallpapers/1920x1080&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE";

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

loadran();

// Get acces to search box
const input = document.getElementById("input");

// Add event on enter
input.addEventListener("keydown", function(event){
  if (event.key == "Enter")
    loadImg();
});

// Create an array of images
function createImagesArray(data){
  const imageNodes = [];
  for (let i = 0;i < data.results.length;i++){
    // Create div
    imageNodes[i] = document.createElement("div");
    // Give div class 
    imageNodes[i].className = "img";
    // Link image
    imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.regular+")";
    // Get width of image
    var imageWidth = data.results[i].width;
    // Get height of image
    var imageHeight = data.results[i].height;
    // Get id of div holding img
    var fscreen = document.getElementById("fscreen");
    // Get id of img holding fullscreen image
    var fscreenImg = document.getElementById("fscreenImg");
    // Display fullscreen image onclick
    imageNodes[i].addEventListener("click", function(){
      fscreen.style.display = "block";
      fscreenImg.src = data.results[i].urls.regular;
    })
    // Get id of span holding close button
    var close = document.getElementsByClassName("close")[0];
    // Close fullscreen image
    close.onclick = function(){ 
      fscreen.style.display = "none";
    }
    // Gives images in landscape only
    if (imageHeight < imageWidth){
      document.getElementsByClassName("gallery")[0].insertAdjacentElement("beforeend", imageNodes[i]);
    }
  }
}

// Create the function for loadImg
function loadImg(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query='"+input.value+"'/1920x1080&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE";

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Remove Images
function removeImages(){
  var i = 0;
  var list = document.getElementsByClassName("gallery")[0];

  while(i < list.childNodes.length){
    list.removeChild(list.childNodes[i]);
  }
}

// Could be made more efficient - Update Later
// Galaxy
const galaxy = document.getElementById("galaxy");

galaxy.addEventListener("click", function(event){
  loadgalaxy();
});

function loadgalaxy(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=galaxy/1920x1080&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Forest
const forest = document.getElementById("forest");

forest.addEventListener("click", function(event){
  loadforest();
});

function loadforest(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=rainforest/1920x1080&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Texture & Patterns
const tp = document.getElementById("tp");

tp.addEventListener("click", function(event){
  loadtp();
});

function loadtp(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=texture+patterns&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Reefs
const reefs = document.getElementById("reefs");

reefs.addEventListener("click", function(event){
  loadreefs();
});

function loadreefs(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=reefs&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Mountains
const mountains = document.getElementById("mountains");

mountains.addEventListener("click", function(event){
  loadmountains();
});

function loadmountains(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=mountains&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Sky
const sky = document.getElementById("sky");

sky.addEventListener("click", function(event){
  loadsky();
});

function loadsky(){
  removeImages();

  const url = "https://api.unsplash.com/search/photos?query=sky&orientation=landscape&per_page=30&client_id=oeTjT06cCcfH6q2qIF2hY3dM-v20OpH28DInNJVQveE"

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else
      console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });
}

// Dark mode
const options = {
  bottom: '25px', // default: '32px'
  right: '14px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '💡', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();