import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChatHistory from "../components/ChatHistory";
import Home from "../components/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/chat-history",
                element: <ChatHistory></ChatHistory>
            },
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);

export default routes;