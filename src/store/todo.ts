import { getterTree, mutationTree } from 'typed-vuex'

// 型は大文字で記載して変数・定数と区別できるようにすることが多い
export interface TodoType {
  task: string
  checked: Boolean
}

export const state = () => ({
  todo: [
    { task: 'foo', checked: true },
    { task: 'bar', checked: false },
    { task: 'yeah', checked: false },
  ] as TodoType[],
})
// export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTodo: (state) => state.todo,
})

export const mutations = mutationTree(state, {
  setTodo(state, task): void {
    // Todoの追加
    const newTask = { task: '', checked: false }
    newTask.task = task
    state.todo.push(newTask)
  },
  changeState(state, index): void {
    // Todochekedを反転させる
    state.todo[index].checked = !state.todo[index].checked
  },
  deleteTodo(state): void {
    // 配列を削除
    state.todo.splice(0)
  },
})
