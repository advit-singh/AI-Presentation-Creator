import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { useAtom } from 'jotai';
    import { userAtom } from '@/store/user';
    import { signOut } from '@/utils/auth'; // Assuming you have an auth utility


    const Navbar: React.FC = () => {
      const location = useLocation();
      const [user, setUser] = useAtom(userAtom);

      const handleSignOut = async () => {
        try {
          await signOut();
          setUser(null); // Update user state after sign-out
        } catch (error) {
          console.error('Sign-out failed:', error);
          // Add error handling and UI feedback as needed
        }
      };

      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">AI Presentation Creator</Link>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className={`text-white hover:underline ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link to="/editor" className={`text-white hover:underline ${location.pathname.startsWith('/editor') ? 'underline' : ''}`}>Editor</Link>
                  </li>
                  <li>
                    <Link to="/insights" className={`text-white hover:underline ${location.pathname === '/insights' ? 'underline' : ''}`}>Insights</Link>
                  </li>
                  <li>
                    <Link to="/ai-enhancements" className={`text-white hover:underline ${location.pathname === '/ai-enhancements' ? 'underline' : ''}`}>AI Enhancements</Link>
                  </li>
                  <li>
                    <Link to="/interactive-elements" className={`text-white hover:underline ${location.pathname === '/interactive-elements' ? 'underline' : ''}`}>Interactive Elements</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="text-white hover:underline">Sign Out</button>
                  </li>
                </>
              )}
              {!user && (
                <li>
                  <Link to="/auth" className="text-white hover:underline">Login / Sign Up</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      );
    };

    export default Navbar;
