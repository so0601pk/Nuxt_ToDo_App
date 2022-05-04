import { getAccessorType } from 'typed-vuex'
// Import all your submodules
import * as submodule from './submodule'

export const state = () => {
  return {}
}
export const getters = {}
export const mutations = {}
export const actions = {}
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    submodule,
  },
})
