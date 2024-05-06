const Nav = (): JSX.Element => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <a
            href="/"
            className="router-link-active router-link-exact-active text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
          >
            Vue Shop
          </a>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <a href="/fashion" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
            패션
          </a>
          <a href="/accessory" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
            악세서리
          </a>
          <a href="/digital" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
            디지털
          </a>
        </div>
        <div className="flex items-center px-2">
          <label htmlFor="" className="swap swap-rotate mr-2 sm:mr-4">
            <input type="checkbox" className="js-theme" />
            <img src="../../../src/assets/img/svg/moon-regular.svg" alt="dark" className="w-4 h-4" />
            <img src="../../../src/assets/img/svg/sun-regular.svg" alt="light" className="w-4 h-4" />
          </label>
          <div className="dropdown">
            <button
              type="button"
              className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
            ></button>
            <input
              type="text"
              placeholder="검색"
              className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
            ></input>

            <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600"></ul>
          </div>
        </div>
        <div>
          <a href="/cart" className="router-link-active router-link-exact-active btn btn-ghost w-10 h-10 p-0">
            <img src="../../../src/assets/img/svg/cart-shopping-solid.svg" alt="cart" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
