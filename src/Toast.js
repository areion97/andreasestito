import { Toaster, toast } from "react-hot-toast"
function success(message) {
    toast.success(message)
}


function error(message) {
    toast.error(message)
}

function Toast() {
    return (
        <div><Toaster/></div>
    )
}


export {success,error, Toast};