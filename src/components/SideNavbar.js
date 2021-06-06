import NavMenu from './NavMenu';

const SideNavbar = () => {
  return (
    <div className="fixed bg-white">
      <div className=" hidden xl:flex flex-col justify-center h-screen min-h-[400px] w-[400px] border-r-[1px] px-24 overscroll-y-scroll">
        <div className="flex flex-col">
          <h1 className="font-mulish font-extrabold text-4xl uppercase mb-10 ">Tokyo</h1>
          <NavMenu />
        </div>
        <div className="copyright text-gray-500 mt-10 font-montserrat italic text-[15px]">
          <p>© 2021 Tokyo</p>
          <p>Created by {' '}
            <a
              className="text-black font-medium "
              href="https://twitter.com/"
            >Arnold
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
