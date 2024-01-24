import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="text-center mt-20 text-red-500 shadow-lg">
            <h1 className="text-4xl">Ooops!!</h1>
            <h2 className="text-2xl mb-4">Something went wrong.</h2>
            <h3 className="text-lg">{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;