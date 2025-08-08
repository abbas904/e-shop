import React, { useState } from 'react'

const ChangeAdddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setAddress(newAddress)
            setIsModalOpen(false)
          }}
        >
          Save Address
        </button>
      </div>
    </div>
  )
}

export default ChangeAdddress
