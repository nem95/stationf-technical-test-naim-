'use client'

import Link from 'next/link';
import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import TODOS from '~/utils/todos';

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const users = (await res.json());
  return users;
}

function Page(): React.JSX.Element {
  const queryClient = useQueryClient()
  const todos = useQuery('todos', getTodos)

  return (
    <div>
      <div className="max-w-md mx-auto  overflow-hidden mt-12">
        <div className="px-4 py-2 bg-violet-400 shadow-lg rounded-lg">
          <h1 className="text-white font-bold text-center text-2xl uppercase">The Founders To-Do</h1>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-5'>
          <ul className="divide-y divide-gray-200 px-4 ">
            {TODOS?.map(todo => (
              <li className="py-4" key={todo.id}>
                <Link href={`/todos/${todo.id}`}>
                  <div className="flex items-center">
                    <div className="ml-3 block text-gray-900">
                      <span className="text-lg font-medium">{todo.title}</span>
                      <span className="text-sm font-light text-gray-500 ms-1">Due on {todo.dueDate}</span>
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