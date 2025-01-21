const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
      {children}
    </div>
  </div>
);

export default Layout;

