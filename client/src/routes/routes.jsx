import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home.page';
import SignIn from '../pages/sign-in.page';
import SignUp from '../pages/sign-up.page';
import ProtectedRoutes from './protectedRoutes';

const ConfigRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/register' element={<SignUp />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default ConfigRoutes;