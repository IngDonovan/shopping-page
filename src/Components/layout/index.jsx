
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-20 bg-[#212121] text-white">
            {children}
        </div>
    );
};

export default Layout;