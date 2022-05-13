import { getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({
  todo: [
    { task: 'foo', checked: true },
    { task: 'bar', checked: false },
    { task: 'yeah', checked: false },
  ] as object[],
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTodo: (state) => state.todo,
})

export const mutations = mutationTree(state, {
  setTodo(state, task): void {
    const newTask = { task: '', checked: false }
    newTask.task = task
    state.todo.push(newTask)
  },
  changeState(state, index): void {
    state.todo[index].checked = !state.todo[index].checked
  },
})
