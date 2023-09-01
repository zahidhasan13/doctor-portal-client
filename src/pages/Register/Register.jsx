import { useContext } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        form.reset();
        updateUserData(user, name);
        navigate("/login");
      })
      .catch(() => {
        toast.error("Couldn't create user");
      });

      const updateUserData = (user, name) => {
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {})
          .catch(() => {});
      };
    };

    const handleGoogleSignIn = () => {
      signInGoogle()
      .then(result => {
        const user = result.user;
        toast.success("Google signed in");
        navigate("/");
      })
      .catch(() => {toast.error("Google signed in failed");});
    }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <FaUserDoctor className="mr-2 text-[#12D0DC]"></FaUserDoctor>
          Doctor Portal
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-[#12D0DC] hover:underline dark:text-[#12D0DC]"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] hover:bg-gradient-to-r hover:from-[#11D0DE] hover:to-[#16D2BE] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r dark:from-[#16D2BE] dark:to-[#11D0DE] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#12D0DC] hover:underline dark:text-[#12D0DC]"
                >
                  Login here
                </Link>
              </p>
              <div className="flex  justify-between items-center">
                <div className="bg-[#CFCFCF] w-40 h-[1px] "></div>
                <p>OR</p>
                <div className="bg-[#CFCFCF] w-40 h-[1px] "></div>
              </div>
              <button
              onClick={handleGoogleSignIn}
                className="w-full border-2 border-black py-2.5 rounded-lg font-medium uppercase"
              >
                continue with google
              </button>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
