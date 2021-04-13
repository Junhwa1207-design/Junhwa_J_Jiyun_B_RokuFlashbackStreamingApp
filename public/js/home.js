import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';

const router = new VueRouter({
    routes: [
        { path: '/', home: 'root', component: LoginComponent, beforeEnter: (to, from, next) =>{
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

(() => {
    const vm = new Vue({
        data: {
         authenticated: false,
         isAdmin: false,
         currentUser: undefined
        },

        created: function() {
            // use this if you want 
            // if (this.$route.params) {
            //     debugger;
            // }
        },
        
        methods: {
            logout() {
             // remove the caches user from localstorage, if it exists
            if(localStorage.getItem('cacheduser')) {
                localStorage.removeItem('cacheduser');
            }
                this.$router.push( {name : "root"});
                this.currentUser = undefined;
            }
        },

        authenticateuser(user) {
            //debugger;
            this.currentUser = user;
        },
   
        router
    }).$mount('#app');
})();



