import React from 'react';
import Button from '@/components/Button'; // Import your new component

const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Test Page for Buttons</h1>

      {/* --- Size Examples --- */}
      <div className="flex items-center gap-4">
        <Button 
          title="Small Button"
          styles="bg-blue-500 text-white text-sm px-3 py-1 rounded-md"
        />
        <Button 
          title="Medium Button"
          styles="bg-blue-500 text-white text-base px-5 py-2 rounded-md"
        />
        <Button 
          title="Large Button"
          styles="bg-blue-500 text-white text-lg px-7 py-3 rounded-md"
        />
      </div>

      {/* --- Shape Examples --- */}
      <div className="flex items-center gap-4">
        <Button 
          title="Rounded SM"
          styles="bg-green-600 text-white text-base px-5 py-2 rounded-sm"
        />
        <Button 
          title="Rounded MD"
          styles="bg-green-600 text-white text-base px-5 py-2 rounded-md"
        />
        <Button 
          title="Rounded Full"
          styles="bg-green-600 text-white text-base px-5 py-2 rounded-full"
        />
      </div>
    </main>
  )
}

export default LandingPage;