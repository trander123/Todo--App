import { useTodoContext } from '../context/TodoContext'

export const Filters = ({completed, active, all}) => {
  const {deleteCompleted, todosLeft} = useTodoContext()
  return (
    <div className='flex flex-col space-y-5 border-t border-gray-400'>
      <div className='flex flex-row justify-between bg-white px-4 py-2 rounded-b-md'>
        <span>{todosLeft() ? `${todosLeft()} item/s left` : "0 item/s left"}</span>
        <button onClick={() => deleteCompleted()}>Clear Completed</button>
      </div>
      <div className='flex flex-row justify-center space-x-6 bg-white px-4 py-2 rounded-md'>
        <button onClick={() => all()}>All</button>
        <button onClick={() => active()}>Active</button>
        <button onClick={() => completed()}>Completed</button>
      </div>
    </div>
  )
}
