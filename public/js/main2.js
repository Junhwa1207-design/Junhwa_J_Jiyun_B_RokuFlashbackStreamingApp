import { fetchData} from "./components/TheDataMiner.js";
import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';


(() =>{

console.log('loaded');
  
function popErrorBox(message) {
    alert("Something has gone horribly, horribly wrong");
}
//show the individual content after a click
function openLightbox(data) {
 
    let lightbox2 = document.querySelector(".lightbox2"),
        closeButton = lightbox2.querySelector('span');

        closeButton.addEventListener("click", ()=> { lightbox2.classList.remove('show-lightbox2')})

    lightbox2.classList.add('show-lightbox2');
    //lightbox should open but nothing inside yet
    lightbox2.querySelector('img').src = `images2/${data[0].image}`;
    lightbox2.querySelector('h4').textContent = data[0].name; 
    //lightbox2.querySelector('p').textContent = data[0].year; 
    lightbox2.querySelector('h5').textContent = data[0].description; 
}


function retrieveProjectInfo(event) {
 
    if (!event.target.id) { return }

    fetchData(`./includes/index2.php?id=${event.target.id}`).then(data => openLightbox(data)).catch(err => console.log(err));
}

function renderPortfolioThumbnails(thumbs) {
    let userSection2 = document.querySelector('.user-section2'),
        userTemplate2 = document.querySelector('#user-template2').content;

    for (let user2 in thumbs) {

        let currentUser2 = userTemplate2.cloneNode(true),
            currentUserText2 = currentUser2.querySelector('.user2').children;

        currentUserText2[0].src = `images2/${thumbs[user2].image}`;
        currentUserText2[0].id = thumbs[user2].id;
        // add this new user to the view
        userSection2.appendChild(currentUser2);
    }

    userSection2.addEventListener("click", retrieveProjectInfo);
}

fetchData("./includes/index2.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err)); 



})();



  










