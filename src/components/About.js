import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <h1>About Us</h1>
            <h2>Hello there</h2>
            <User name = {"Abhishek (function)"}/>
            <UserClass name = {"Abhishek (class)"} location = {"Rishikesh class"} /> 
        </div>
    );
};

export default About