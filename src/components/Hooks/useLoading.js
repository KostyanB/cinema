import { useState } from 'react';

export const useLoading = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return {
        loading,
        setLoading,
        error,
        setError
    };
};