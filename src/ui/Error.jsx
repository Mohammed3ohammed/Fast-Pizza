import {  useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton"

function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Something went wrong 😥</h1>
            <p>{error.data || error.message}</p>

            <LinkButton to="-1">&larr; Goback</LinkButton>
        </div>
    )
}

export default Error;