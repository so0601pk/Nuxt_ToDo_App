import { getterTree, mutationTree } from 'typed-vuex'
// ※下記は使用しない。必要な場合、importで読み込む
// actionTree

export const state = () => ({
  todo: ['hogehoge', 'hogehoge'] as string[],
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTodo: (state) => state.todo,
})

export const mutations = mutationTree(state, {
  setTodo(state, todo): void {
    state.todo.push(todo)
  },
})

// ※下記は使用しない
// export const actions = actionTree(
//   { state, getters, mutations },
//   {
//     updateTitle({ getters, commit }): void {
//       const currentTitle = getters.title
//       commit('setTitle', `${currentTitle}fuga`)
//     },
//   }
// )
