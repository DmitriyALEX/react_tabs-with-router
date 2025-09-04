import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import Navigation from './components/navigation';
import HomePage from './pages/home';
import TabsPage from './pages/tabs';
import NotFoundPage from './pages/notFound';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
