import { toast } from 'react-toastify';

export const notify_success = (message:string) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export const notify_error = (message:string) => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export const copyText = (text:string) => {
    if (text) {
        navigator.clipboard.writeText(text);
        notify_success(`${text} copied`)
    }
  }