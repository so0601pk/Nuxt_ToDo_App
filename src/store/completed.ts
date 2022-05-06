import { getterTree, mutationTree } from 'typed-vuex'
// ※下記は使用しない。必要な場合、importで読み込む
// actionTree

export const state = () => ({
  completed: ['fugafuga', 'fugafuga'] as string[],
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getComp: (state) => state.completed,
})

export const mutations = mutationTree(state, {
  setTodo(state, task): void {
    state.completed.push(task)
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
