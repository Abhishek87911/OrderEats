import { createContext } from "react";

//we can access this anywhere in my app
const UserContext = createContext({
        loggedInUser: "Default User",
});

export default UserContext;