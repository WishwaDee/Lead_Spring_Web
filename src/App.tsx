import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { RegistrationForm } from './components/RegistrationForm';
import { AdminLogin } from './components/AdminLogin';
import { AdminSignup } from './components/AdminSignup';
import { AdminDashboard } from './components/AdminDashboard';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const checkRoute = () => {
      setCurrentRoute(window.location.pathname);
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          window.history.pushState({}, '', href);
          checkRoute();
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', checkRoute);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (currentRoute === '/admin/signup') {
    return <AdminSignup />;
  }

  if (currentRoute === '/admin') {
    return user ? <AdminDashboard /> : <AdminLogin />;
  }

  return <RegistrationForm />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
