import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    // Redirect to the actual admin HTML file
    window.location.replace('/admin/index.html');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-sage-200 border-t-sage-600 rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-sage-800 mb-2">Loading Content Manager</h1>
        <p className="text-sage-600">Redirecting to CMS interface...</p>
      </div>
    </div>
  );
}