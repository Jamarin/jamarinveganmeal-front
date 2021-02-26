const state = () => ({
    id: '',
    username: '',
    email: '',
    role: '',
    isAuth: false,
    accessToken: '',
    refreshToken: ''
})

const getters = {
    getId: ({id}) => id,
    getUsername: ({username}) => username,
    getEmail: ({email}) => email,
    getRole: ({role}) => role,
    isAuth: ({isAuth}) => isAuth,
    getAccessToken: ({accessToken}) => accessToken,
    getRefreshToken: ({refreshToken}) => refreshToken
}

const actions = {
    login({ commit }, user) {
        commit('setUserData', user)
    },
    logout({ commit }) {
        commit('setUserData', null)
    }
}

const mutations = {
    setUserData(state, userData) {
        if(userData !== null) {
            state = userData
        } else {
            state.id = ''
            state.username = ''
            state.email = ''
            state.role = ''
            state.isAuth = false
            state.accessToken = ''
            state.refreshToken = ''
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}