import User from "./User";
import UserClass from "./UserClass";


const About = () =>{
    return (
        <div className="text-center font-bold m-4">
           
            <h2>Hello there</h2>
            <User name = {"Abhishek (function)"}/>
            <UserClass name = {"Abhishek (class)"} location = {"Rishikesh class"} /> 
        </div>
    );
};

export default About