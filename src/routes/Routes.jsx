import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChatHistory from "../components/ChatHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/chat-history",
                element: <ChatHistory></ChatHistory>
            }
        ]
    }
]);

export default routes;