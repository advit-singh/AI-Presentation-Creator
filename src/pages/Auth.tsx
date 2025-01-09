import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Input, Button } from '@shadcn/ui';
    import { useAtom } from 'jotai';
    import { userAtom } from '@/store/user';
    import { authenticate } from '@/utils/auth'; // Import your authentication utility


    const Auth: React.FC = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false);
      const [, setUser] = useAtom(userAtom);
      const navigate = useNavigate();


      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
          const user = await authenticate(email, password); // Replace with your actual authentication logic
          setUser(user);
          navigate('/'); // Redirect to home page after successful authentication
        } catch (error: any) {
          setError(error.message || 'Authentication failed.');
          console.error('Authentication failed:', error);
        } finally {
          setLoading(false);
        }
      };


      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Login / Sign Up</h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required />
              <Button type="submit" disabled={loading}>
                {loading ? 'Authenticating...' : 'Submit'}
              </Button>
            </form>
          </div>
        </main>
      );
    };


    export default Auth;
