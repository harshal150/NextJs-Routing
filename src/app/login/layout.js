function Layout({children}) {
    return ( <div>
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
  <div className="flex-1 flex justify-between items-center">
    <a href="#" className="text-xl">
      Company
    </a>
  </div>
  <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
    <svg
      className="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>
  <input className="hidden" type="checkbox" id="menu-toggle" />
  <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          <a className="md:p-4 py-3 px-0 block" href="#">
            AboutUs
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block" href="#">
            Treatments
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

        {children}
    </div> );
}

export default Layout;