'use client'

import React, { useCallback } from 'react'
import { useQueryClient } from 'react-query';
import { todoType } from '../page';

function Page({ params }: { params: { id: number } }): React.JSX.Element {
  const queryClient = useQueryClient()
  const getTodo = useCallback((): todoType | null => {
    if (!params.id) {
      return null;
    }
    const todos = queryClient.getQueryData('todos');

    if (todos) {
      const todo = todos.filter((todo) => todo.id === Number(params.id))
      return todo[0]
    }
    return null
  }, [params, queryClient])


  if (!params.id) {
    return <>NO TODO AVAILABLE</>
  }

  const todo = getTodo();


  return (
    <div>
      <div className="max-w-md mx-auto  overflow-hidden mt-12">
        <div className="px-4 py-2 bg-violet-400 shadow-lg rounded-lg">
          <h1 className="text-white font-bold text-center text-2xl uppercase">Todo: {params.id}</h1>
        </div>

        {todo && (
          <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-5'>
          <ul className="divide-y divide-gray-200 px-4 ">
            <li className="py-4">
              <div className="flex items-center">
                <div className="ml-3 block text-gray-900">
                  <span className="text-lg font-medium">{todo.title}</span>
                  <span className="text-sm font-light text-gray-500 ms-1">Completed {todo.completed ? '✅' : '❌'}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        )}
      </div>
    </div>
  )
}

export default Page;