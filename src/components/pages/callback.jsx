import {
    BrowserRouter as Router,
    useNavigate 
  } from "react-router-dom";

export const Callback = () => {
    const navigate = useNavigate();
    const { isLoading } = (() => {
    // Navigate to root path when finished
        navigate('/login')
    });


  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
  return null
};
