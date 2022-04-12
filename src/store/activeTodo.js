export const state = () => ({
  active: null,
})

export const mutations = {
  setIsActive(state) {
    this.active = state
  },
}
export const getters = {
  counter() {
    return this.active
  },
}
