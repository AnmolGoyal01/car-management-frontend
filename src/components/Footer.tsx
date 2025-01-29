const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 flex">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Anmol Goyal. All rights reserved.</p>
      </div>
      <div className="px-10">
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/AnmolGoyal01" target="_main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.493.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.312.469-2.384 1.236-3.225-.123-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.04.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.651 1.653.24 2.873.117 3.176.769.841 1.235 1.913 1.235 3.225 0 4.61-2.803 5.624-5.475 5.922.43.373.823 1.105.823 2.226v3.293c0 .319.193.694.8.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/anmol-goyal-358804235/"
            target="_main"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M23.994 0H.006C.003 0 0 .003 0 .006v23.988c0 .003.003.006.006.006h23.988c.003 0 .006-.003.006-.006V.006C24 .003 23.997 0 23.994 0zM7.042 20.755H3.994v-9.636h3.048v9.636zm-1.524-10.92c-.98 0-1.779-.794-1.779-1.77 0-.977.799-1.77 1.779-1.77s1.779.793 1.779 1.77c0 .976-.799 1.77-1.779 1.77zm14.446 10.92h-3.048v-5.379c0-1.268-.022-2.904-1.77-2.904-1.773 0-2.045 1.388-2.045 2.818v5.465h-3.048V9.119h2.932v1.328h.04c.407-.771 1.402-1.583 2.896-1.583 3.09 0 3.663 2.038 3.663 4.68v6.145z"
              ></path>
            </svg>
          </a>
          <a href="https://anmolgoyal.me/" target="_main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;