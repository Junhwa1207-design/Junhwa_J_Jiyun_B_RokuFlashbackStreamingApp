import { fetchData} from "./components/TheDataMiner.js";
import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import { SendMail } from "./modules/mailer.js";
import channelACard from "./modules/channelACard.js";
import channelKCard from "./modules/channelKCard.js";

const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: LoginComponent, beforeEnter: (to, from, next) =>{
            // if you're authenticated (set in localstorage), then go to the home page
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {currentuser:user}});
            } else {
                next();
            }
        }},
        { path: '/users', name: 'users', component: AllUsers },
        { path: '/home', name: 'home', component: HomeComponent, props: true }
    ]
});


const myVM =(()=> {
    let vm = new Vue ({

        data: {
            // message: "MINICOOPER EVENT!",
            // anotherMessage: "Find your 3 Doors Mini.",
            removeAformat: true,
            showBioData: false,
            channelA: [ ],
            channelK: [ ],
            currentMovieChannelAData:{},
            currentMovieChannelKData:{}
        },
        mounted: function(){
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
            .then(data => {
            data.forEach(channelA => this.channelA.push(channelA));
            })
            .catch(err => console.error(err));
     },
         mounted: function(){
        console.log("Vue is mounted, trying a fetch for the initial data");

        fetchData("./includes/index.php")
        .then(data => {
        data.forEach(channelK => this.channelK.push(channelK));
        })
        .catch(err => console.error(err));
 },
     methods:{
        logclicked(){
            console.log("clicked on a list item")
        },
        clickHeader() {
            console.log("clicked on the header");
        },

        showMovieData (target) {
 
            console.log('clicked to view movieChannelA bio-data', target, target.name);
            this.showBioData = this.showBioData ? false : true;
            this. currentMovieChannelAData = target;
        },

        showMovieData (target) {
 
            console.log('clicked to view movieChannelA bio-data', target, target.name);
            this.showBioData = this.showBioData ? false : true;
        
            this. currentMovieChannelKData = target;
        }
    },
        components: {
            "channela-card" : channelACard,  
            "channelk-card" : channelKCard  
        }
    }).$mount("#app");
})();

(() =>{

console.log('loaded');
  
function popErrorBox(message) {
    alert("Something has gone horribly, horribly wrong");
}
//show the individual content after a click
function openLightbox(data) {
 
    let lightbox = document.querySelector(".lightbox"),
        closeButton = lightbox.querySelector('span');

        closeButton.addEventListener("click", ()=> { lightbox.classList.remove('show-lightbox')})

    lightbox.classList.add('show-lightbox');
    //lightbox should open but nothing inside yet
    lightbox.querySelector('img').src = `images/${data[0].image}`;
    lightbox.querySelector('h4').textContent = data[0].name; 
    lightbox.querySelector('h5').textContent = data[0].year; 
    lightbox.querySelector('h5').textContent = data[0].description; 
}


function retrieveProjectInfo(event) {
 
    if (!event.target.id) { return }

    fetchData(`./includes/index.php?id=${event.target.id}`).then(data => openLightbox(data)).catch(err => console.log(err));
}

function renderPortfolioThumbnails(thumbs) {
    let userSection = document.querySelector('.user-section'),
        userTemplate = document.querySelector('#user-template').content;

    for (let user in thumbs) {

        let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

        currentUserText[0].src = `images/${thumbs[user].image}`;
        currentUserText[0].id = thumbs[user].id;
        // add this new user to the view
        userSection.appendChild(currentUser);
    }

    userSection.addEventListener("click", retrieveProjectInfo);
}

fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err)); 



var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;
var i=slides;

nextSlide.onclick=function (){
    console.log("click");
    next("next");
}
prevSlide.onclick=function(){
   console.log("click");
   next("prev");
}

function next(direction){

   if(direction=="next"){
       index++;
       if(index==totalSlides){
           index=0;
       }
   }
   else{
       if(index==0){
           index=totalSlides-1;
       }
       else{
           index--;
       }
   }

  for(i=0; i<slides.length;i++){
      slides[i].classList.remove("active");
  }
  slides[index].classList.add ("active");

}


var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count == 0) {
        count = 1;
        audio.play();
        playPauseBTN,innerHTML = "Pause &#9208;";
        }else{
            count = 0;
            audio.pause();
            playPauseBTN.innerHTML = "Play &#9658;";
        }
}



})();



  










