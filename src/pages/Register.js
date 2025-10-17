import { signUpUser } from "../services/api";


const Register = async () => {

  const handleRegister = async (event) =>{
      event.preventDefault(); 

      const errorMessageContainer = document.getElementById("error-message");
      errorMessageContainer.innerHTML = '';
      const email           = document.getElementById("email").value.trim();
      const password        = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;


      if (!email) {
        errorMessageContainer.innerHTML = `Email is required.<br />`;
        return;
      }
      if (!password) {
        errorMessageContainer.innerHTML = `Password is required.<br />`;
        return;
      }
      if (password !== confirmPassword) {
        errorMessageContainer.innerHTML = `Passwords do not match.<br />`;
        return;
      }
      const response = await signUpUser(email, password);
      if(response.error){
        errorMessageContainer.innerHTML = `${response.error.message}`;
        return;
      }
      window.location.href = '/';
  }

  setTimeout(() => {
    document.getElementById("register-form").addEventListener("submit", handleRegister);
  }, 200);

  return `
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
            Create a new account
          </h2>
        </div>
        <form id="register-form" class="mt-8 space-y-6" action="#" method="POST">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
            <div>
              <label for="confirm-password" class="sr-only">Confirm Password</label>
              <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md" placeholder="Confirm Password">
            </div>
          </div>
          <div class="flex items-center justify-between"> 
            <div id="error-message" class="text-sm text-red-500"></div>
          </div>       
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
};

export default Register;