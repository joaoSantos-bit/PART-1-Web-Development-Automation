import Layout from "../shared/components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterServer from "../features/registerServer";
import CheckServers from "../features/checkServer";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<RegisterServer />} />
                    <Route path='/register' element={<RegisterServer />} />
                    <Route path='/check' element={<CheckServers />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default Router;