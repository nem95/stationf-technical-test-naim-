import React from 'react'

function page(): React.JSX.Element {
  return (
    <div>
      <div className="max-w-md mx-auto  overflow-hidden mt-12">
        <div className="px-4 py-2 bg-violet-400 shadow-lg rounded-lg">
          <h1 className="text-white font-bold text-center text-2xl uppercase">Add To-Do</h1>
        </div>

        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo">
                Todo
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="Your Todo" />
            </div>
            <div className="flex items-center justify-between">

            <button className="bg-violet-400 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Add Todo
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page