import React from 'react';
import Button from '@/components/Button'; // Import your component

const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      
      {/* This div contains ONLY the three button shapes 
        required by the checker.
      */}
      <div className="flex items-center gap-4">
        <Button 
          title="Rounded SM"
          styles="bg-blue-500 text-white px-5 py-2 rounded-sm"
        />
        <Button 
          title="Rounded MD"
          styles="bg-blue-500 text-white px-5 py-2 rounded-md"
        />
        <Button 
          title="Rounded Full"
          styles="bg-blue-500 text-white px-5 py-2 rounded-full"
        />
      </div>

    </main>
  )
}

export default LandingPage;