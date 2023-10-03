import { toast } from "react-hot-toast"

function success(message) {
    const toastId = toast.success(<div onClick={()=>toast.dismiss(toastId)}>{message}</div>);
}
function error(message) {
    const toastId = toast.error(<div onClick={()=>toast.dismiss(toastId)}>{message}</div>);
}
function promiseToast(promise, loadingMessage, successMessage, errorMessage) {
    const toastId = toast.promise( promise,{
        loading: loadingMessage,
        success: successMessage,
        error: errorMessage,
      },
      {
        success: {
          duration: 5000
        },
      });
      return toastId;
}
export {success,error, promiseToast};