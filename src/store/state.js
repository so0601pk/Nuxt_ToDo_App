// 使用しない
export const state = () => ({
  isActive: null,
})

export const mutations = {
  setIsActive(state) {
    this.isActive = state
  },
}
export const getters = {
  counter() {
    return this.isActive
  },
}
