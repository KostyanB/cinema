import { useState, useCallback } from "react";

export const useAsync = ({ asyncFn }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const execute = useCallback(
        async (...params) => {
            try {
                setLoading(true);
                const response = await asyncFn(...params);
                setResult(response);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        },
        [asyncFn]
    );

    return { error, result, loading, execute };
};