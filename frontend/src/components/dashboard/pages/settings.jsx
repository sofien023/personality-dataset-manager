import React from 'react'

function settings() {
    return (
      <>
      <div className='w-full h-full items-center justify-center'>
        <div style={{
          width: '100%',
          maxWidth: '100%',
          padding: '4rem',
        }}>
          <h1 className='text-2xl font-bold mb-4'>Settings</h1>
          <p className='text-gray-600'>This is the settings page where you can manage your account settings.</p>
          <div className='mt-6'>
            <h2 className='text-xl font-semibold mb-2'>Account Settings</h2>
            <p className='text-gray-600'>Here you can update your account information.</p>
          </div>
        </div>
      </div>
      </>
    );
}
  
  export default settings