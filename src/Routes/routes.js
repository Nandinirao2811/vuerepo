import Register from "../components/Register.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Login from '../components/Login.vue';
import BloomAdmin from '../components/Admin.vue';


export default [
    {
        path:'/',
        component:HelloWorld
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/admin',
        component:BloomAdmin
    }
    
]