export const state = () => ({
  complete: null,
})

export const mutations = {
  setComplete(state) {
    this.complete = state
  },
}
export const getters = {
  counter() {
    return this.complete
  },
}
