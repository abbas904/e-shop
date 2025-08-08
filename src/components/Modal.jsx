import React from 'react'

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  return (
    <div
      onClick={handleOverlayClick}
      className='fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50'
    >
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative'>
        <button
          className='absolute top-3 right-4 text-gray-500 text-2xl'
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
