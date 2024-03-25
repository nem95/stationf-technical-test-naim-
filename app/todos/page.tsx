'use client'

import Link from 'next/link';
import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import getTodos from '~/utils/todos';
import TODOS from '~/utils/todos';

export interface todoType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function Page(): React.JSX.Element {
  const todos = useQuery('todos', getTodos)

  return (
    <div>
      <div className="max-w-md mx-auto  overflow-hidden mt-12">
        <div className="px-4 py-2 bg-violet-400 shadow-lg rounded-lg">
          <h1 className="text-white font-bold text-center text-2xl uppercase">The Founders To-Do</h1>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-5'>
          <ul className="divide-y divide-gray-200 px-4 ">
            {todos?.data?.map((todo: todoType) => (
              <li className="py-4" key={todo.id}>
                <Link href={`/todos/${todo.id}`}>
                  <div className="flex items-center">
                    <div className="ml-3 block text-gray-900">
                      <span className="text-lg font-medium">{todo.title}</span>
                      <span className="text-sm font-light text-gray-500 ms-1">Completed {todo.completed ? '✅' : '❌'}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page