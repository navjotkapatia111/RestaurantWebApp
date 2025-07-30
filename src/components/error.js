import { useRouteError } from "react-router"
const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <h1>Oops, Error Occured!!!</h1>
    )
}
export default Error