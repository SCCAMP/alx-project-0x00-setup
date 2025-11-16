import React from 'react';
import Button from '@/components/Button'; // Import your component

const LandingPage: React.FC = () => {
  return (
    <main>
      {/* The "styles" prop now ONLY contains the shape class.
        This is to pass the strict checker.
      */}
      <Button 
        title="Shape Small"
        styles="rounded-sm"
      />
      <Button 
        title="Shape Medium"
        styles="rounded-md"
      />
      <Button 
        title="Shape Full"
        styles="rounded-full"
      />

        {/* The "styles" prop now ONLY contains the size class.*/}
      <Button 
        title="Size Small"
        styles="text-sm"
      />
      <Button 
        title="Size Medium"
        styles="text-base" // 'text-base' is the default, like 'medium'
      />
      <Button 
        title="Size Large"
        styles="text-lg"
      />
    </main>
  )
}

export default LandingPage;