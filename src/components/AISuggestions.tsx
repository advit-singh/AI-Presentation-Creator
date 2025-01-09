import React, { useState, useEffect } from 'react';
    import { fetchAISuggestions } from '@/utils/api'; // Import your API utility


    interface Suggestion {
      title: string;
      content: string;
    }


    const AISuggestions: React.FC = () => {
      const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');


      useEffect(() => {
        const fetchSuggestions = async () => {
          setLoading(true);
          setError('');
          try {
            const data = await fetchAISuggestions(); // Replace with your actual API call
            setSuggestions(data);
          } catch (error: any) {
            setError(error.message || 'Failed to fetch suggestions.');
            console.error('Failed to fetch AI suggestions:', error);
          } finally {
            setLoading(false);
          }
        };


        fetchSuggestions();
      }, []);


      return (
        <div>
          <h2>AI Suggestions</h2>
          {loading && <p>Loading suggestions...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion.title}>
                  <h3>{suggestion.title}</h3>
                  <p>{suggestion.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };


    export default AISuggestions;
