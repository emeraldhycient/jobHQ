import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
    return (
        <div role="alert" className="p-4 rounded bg-red-100 text-red-700">
            <p>Something went wrong:</p>
            <pre className="text-xs">{error.message}</pre>
            <button onClick={resetErrorBoundary} className="mt-2 text-blue-500">
                Try again
            </button>
        </div>
    );
};

export default ErrorFallback;
