import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginDisplay() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if no state is passed
    if (!location.state?.loginData) {
      navigate("/login");
    }
  }, [navigate, location]);

  // If no state, return null (component will redirect)
  if (!location.state?.loginData) {
    return null;
  }

  const { loginData } = location.state;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card !bg-white/30 rounded-3xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mb-6">
          Login Successful
        </h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-gray-600 font-medium">Email</h2>
            <p className="text-gray-800 font-semibold">{loginData.email}</p>
          </div>

          <div className="pt-4">
            <p className="text-green-600 font-medium">
              You have successfully logged in!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginDisplay;
