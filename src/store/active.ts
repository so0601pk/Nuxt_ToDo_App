import { getterTree, mutationTree } from 'typed-vuex'
// ※下記は使用しない。必要な場合、importで読み込む
// actionTree

export const state = () => ({
  todo: [] as string[],
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTodo: (state) => state.todo,
})

export const mutations = mutationTree(state, {
  setTodo(state, task): void {
    state.todo.push(task)
  },
  deleteTodo(state, num): void {
    state.todo.splice(num, 1)
  },
})

// ※今回、下記は使用しない
// export const actions = actionTree(
//   { state, getters, mutations },
//   {
//     updateTitle({ getters, commit }): void {
//       const currentTitle = getters.title
//       commit('setTitle', `${currentTitle}fuga`)
//     },
//   }
// )
