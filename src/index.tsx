import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Adjust if using a different router
    import Home from './pages/Home';
    import EditorPage from './pages/Editor';

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="editor" element={<EditorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
