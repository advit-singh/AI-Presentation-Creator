import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@shadcn/ui';
    import { useAtom } from 'jotai';
    import { userAtom } from '@/store/user';


    const Home: React.FC = () => {
      const [user] = useAtom(userAtom);

      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl font-bold mb-4">AI Presentation Creator</h1>
            <p className="text-lg mb-8">Create stunning presentations with ease using the power of AI.</p>
            {user ? (
              <>
                <Link to="/editor" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  Create New Presentation
                </Link>
                <p className="mt-4">Already have a presentation? <Link to="/editor">Edit Existing Presentation</Link></p>
              </>
            ) : (
              <Link to="/auth" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Login / Sign Up
              </Link>
            )}
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-2">Features</h2>
              <ul className="list-disc list-inside">
                <li>AI-powered slide generation</li>
                <li>Customizable templates</li>
                <li>Interactive elements</li>
                <li>Export to various formats</li>
              </ul>
            </div>
          </div>
        </main>
      );
    };

    export default Home;
