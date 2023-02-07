import Dashboard from '../admin/components/dashboard/Dashboard';
import User from '../admin/components/user/User';

const routes = [
    {path:'/', exact:true, name:'Admin'},
    {path:'/admin/dashboard', exact:true, name:'Dashboard', element: Dashboard},
    {path:'/admin/user', exact:true, name:'User', element: User},
]
export default routes;