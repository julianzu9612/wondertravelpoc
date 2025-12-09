import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './custom-toast.css';
export const useToaster = () => {
  return { toast, ToastContainer };
};
export default useToaster;
