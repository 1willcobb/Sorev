
function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Your Logo</a>
        </div>

        {/* Pages */}
        <div className="hidden md:flex space-x-4">
          <a href="/page1" className="text-white hover:text-gray-300">
            Page 1
          </a>
          <a href="/page2" className="text-white hover:text-gray-300">
            Page 2
          </a>
          <a href="/page3" className="text-white hover:text-gray-300">
            Page 3
          </a>
        </div>

        {/* User Login */}
        <div className="md:flex items-center space-x-4">
          <button className="hidden md:block bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100">
            Sign In
          </button>
          <div className="md:hidden">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>{" "}
              Sign In
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300"
            // Add logic to open a mobile menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;