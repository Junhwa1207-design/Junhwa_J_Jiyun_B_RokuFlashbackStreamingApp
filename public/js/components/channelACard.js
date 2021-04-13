export default { 
    Name: "channelACard ",
    components: ["movie "],

data: 


function() {
    return {
        myName: this.movie.name,
        myYear: this.movie.year,
        myDescription: this.movie.description,
        program: "IDP",
        removeAformat: true,
        showBioData: false
    }
},

template: `
<li @click="logClicked">
        <img :src="'imagesAdult/' + movie.image" :alt='movie.name + " image"'>
        
        <p class=" remove-movie">{{ movie.name }}</p>

        <!-- <a href="" class="remove-movie">More Info {{ movie.name }}'s info</a>                 
        <a href="" class="remove-movie">Remove {{ movie.name }}</a>-->
    </li>
`, 
created: function () { console.log(`created ${this.movie.name}'s card`); },

methods: { 
    logClicked() { 
        console.log(`fired from inside ${this.movie.name}'scomponent!`); 
        this.$emit("showmydata", this.movie) } } }
