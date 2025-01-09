import React from 'react';
    import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
    import Home from './pages/Home';
    import EditorPage from './pages/Editor';
    import InsightsPage from './pages/Insights';
    import AIEnhancementsPage from './pages/AIEnhancements';
    import InteractiveElementsPage from './pages/InteractiveElements';
    import Navbar from '@/components/Navbar';
    import { useAtom } from 'jotai';
    import { userAtom } from '@/store/user';
    import Auth from './pages/Auth';


    const App: React.FC = () => {
      const [user] = useAtom(userAtom);

      return (
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/editor" element={user ? <EditorPage /> : <Navigate to="/auth" />} />
                <Route path="/insights" element={user ? <InsightsPage /> : <Navigate to="/auth" />} />
                <Route path="/ai-enhancements" element={user ? <AIEnhancementsPage /> : <Navigate to="/auth" />} />
                <Route path="/interactive-elements" element={user ? <InteractiveElementsPage /> : <Navigate to="/auth" />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Redirect for unknown routes */}
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      );
    };

    export default App;
