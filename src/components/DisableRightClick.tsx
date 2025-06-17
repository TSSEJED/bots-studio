'use client';

import { useEffect, useState } from 'react';

export default function DisableRightClick() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      
      // Show notification
      setShowNotification(true);
      
      // Hide notification after 2 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    };

    // Add event listener for context menu
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  if (!showNotification) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-bounce">
      Right-click is disabled on this page.
    </div>
  );
}
