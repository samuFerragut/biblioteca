/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */

// const util = require('util')
export const state = () => ({
  sidebar: false,
  vecti18n: {
    ESP: [
      'Descargar resultado',
      'Reservar Test Saliva'
    ],
    ENG: [
      'Download result',
      'Book Saliva Test'
    ],
    FRE: [
      'Télécharger le résultat',
      'Réserver un test de salive'
    ],
    DEU: [
     'Ergebnis herunterladen',
     'Speicheltest buchen'
    ]
  },
  user: {
    id: '',
    ttl: '',
    created: '',
    userId: '',
    email: '',
    matriz_cif: '',
    matriz_nombre: '',
    matriz_dir: '',
    matriz_pob: '',
    matriz_cp: '',
    matriz_tel: '',
    matriz_obs: '',
    matriz_contacto: {
      nombre: '',
      apellido: ''
    },
    role: ''
   
  },
  propietarios: []
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  },
  SET_PROPIETARIOS(state, value) {
    state.propietarios = value.slice()
  },
  ADD_PROPIETARIO(state, value) {
    state.propietarios.push(value)
  },
  DEL_LAST_PROPIETARIO(state){
    state.propietarios.pop()
  },
  setUser(state, user) {
    state.user = user
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_USER_ID(state, value) {
    state.user.id = value
  },
  SET_USER_TTL(state, value) {
    state.user.ttl = value
  },
  SET_USER_CREATED(state, value) {
    state.user.created = value
  },
  SET_USER_USERID(state, value) {
    state.user.userId = value
  },
  SET_USER_EMAIL(state, value) {
    state.user.email = value
  },
  SET_USER_MATRIZ_CIF(state, value) {
    state.user.matriz_cif = value
  },
  SET_USER_MATRIZ_NOMBRE(state, value) {
    state.user.matriz_nombre = value
  },
  SET_USER_MATRIZ_DIR(state, value) {
    state.user.matriz_dir = value
  },
  SET_USER_MATRIZ_POB(state, value) {
    state.user.matriz_pob = value
  },
  SET_USER_MATRIZ_CP(state, value) {
    state.user.matriz_cp = value
  },
  SET_USER_MATRIZ_TEL(state, value) {
    state.user.matriz_tel = value
  },
  SET_USER_MATRIZ_OBS(state, value) {
    state.user.matriz_obs = value
  },
  SET_USER_CONTACTO_NOMBRE(state, value) {
    state.user.matriz_contacto.nombre = value
  },
  SET_USER_CONTACTO_APELLIDO(state, value) {
    state.user.matriz_contacto.apellido = value
  }
}
export const actions = {
  
  // async login({
  //   commit
  // }, {
  //   email,
  //   password
  // }) {
  //   try {
  //     // console.log('estoy en login')
  //     const response = await this.$axios.$post('/mg/authentication', {
  //       email,
  //       password,
  //       strategy: 'local'
  //     })
  //     const accessToken = response.accessToken
  //     // console.log(util.inspect(response, { showHidden: false, depth: null }))

  //     // console.log('accessToken= ' + accessToken.toString())
  //     try {
  //       // let responseUser = await this.$axios.$get('/mguser/?email=' + email, { headers: { 'Authorization': accessToken } })
  //       const responseUser = await this.$axios.$get('mg/users/?email=' + email, {
  //         headers: {
  //           Authorization: accessToken
  //         }
  //       })
  //       const userInstance = responseUser.data[0]
  //       const user = {
  //         id: accessToken,
  //         ttl: '',
  //         created: userInstance.createdAt,
  //         userId: userInstance._id,
  //         email: userInstance.email,
  //         matriz_cif: userInstance.matriz_cif,
  //         matriz_nombre: userInstance.matriz_nombre,
  //         matriz_dir: userInstance.matriz_dir,
  //         matriz_pob: userInstance.matriz_pob,
  //         matriz_cp: userInstance.matriz_cp,
  //         matriz_tel: userInstance.matriz_tel,
  //         matriz_obs: userInstance.matriz_obs,
  //         matriz_contacto: {
  //           nombre: userInstance.matriz_contacto.nombre,
  //           apellido: userInstance.matriz_contacto.apellido
  //         },
  //         role: userInstance.role,
  //         // precioPSS: userInstance.precioPSS
  //       }
  //       commit('setUser', user)
  //     } catch (error) {
  //       alert('error en user 1' + error)
  //     }
  //     return null
  //   } catch (error) {
  //     alert('error en login ' + error)
  //     return error
  //     // this.$router.push({ name: 'index' })
  //   }
  // },
  async getPropietarios({commit}) {
    try {
      // await this.$axios.$post('/mguser',
      const response = await this.$axios.$get('/mg/users?$select[]=_id&$select[]=email&$select[]=role&precioPSS[$ne]=00000')
      commit('SET_PROPIETARIOS', response.data)
    } catch (error) {
      alert('error en login ' + error)
      return error
      // this.$router.push({ name: 'index' })
    }
  },
  async getPropietario({commit}, value) {
    try {
      const response = await this.$axios.$get('/mg/users?$select[]=_id&$select[]=email&$select[]=role&email=' + value)
      console.log('propietario ' + response.data[0])
      return response.data[0]
    } catch (error) {
      
    }
  },
  async deletePropietario({commit}, value) {
    try {
      const query = '/mg/users?' + '_id=' + value
      // const queryuser = '/mg/users?' + '_id=' + payload.iduser
      const response = await this.$axios.$delete(query, {
        headers: {
          Authorization: this.$auth.Token
        }
      })
      // eslint-disable-next-line no-console
      console.log('response= ' + response)
      return response
    } catch (error) {
      alert('error en el delete de pacientes' + error)
    }
  },
  async register({
    commit
  }, {
    email,
    password,
    m_cif,
    m_nombre,
    m_dir,
    m_pob,
    m_cp,
    m_tel,
    m_contacto,
    m_obs,
    precioPSS
  }) {
    try {
      // await this.$axios.$post('/mguser',
      const data = {
        email,
        password,
        matriz_cif: m_cif,
        matriz_nombre: m_nombre,
        matriz_dir: m_dir,
        matriz_pob: m_pob,
        matriz_cp: m_cp,
        matriz_tel: m_tel,
        matriz_contacto: m_contacto,
        matriz_obs: m_obs,
        role: 'profesional',
        precioPSS
      }
      await this.$axios.$post('/mg/users', data, {
        headers: {
          Authorization: this.$auth.Token
        }
      })
      return 'exito'
    } catch (error) {
      alert('error en login ' + error)
      return error
      // this.$router.push({ name: 'index' })
    }
  },
  async verify({
    commit
  }, {
    token
  }) {
    try {
      // console.log('token = ' + token)
      const obj = {
        action: 'verifySignupLong',
        value: token
      }
      await this.$axios.$post('/mg/authmanagement', obj)
      return 'exito'
    } catch (error) {
      alert('error en verify ' + error)
      return error
      // this.$router.push({ name: 'index' })
    }
  },
  async update({
    commit
  }, {
    m_cif,
    m_nombre,
    m_dir,
    m_pob,
    m_cp,
    m_tel,
    m_contacto_nombre,
    m_contacto_apellido,
    m_obs
  }) {

    // let query = '/mguser?_id=' + this.state.user.userId
    const query = 'mg/users/' + this.state.user.userId
    const data = {
      matriz_cif: m_cif,
      matriz_nombre: m_nombre,
      matriz_dir: m_dir,
      matriz_pob: m_pob,
      matriz_cp: m_cp,
      matriz_tel: m_tel,
      matriz_contacto: {
        nombre: m_contacto_nombre,
        apellido: m_contacto_apellido
      },
      matriz_obs: m_obs
      // role: 'user'
    }
    // eslint-disable-next-line no-console
    // console.log(util.inspect(data, false, null, true /* enable colors */ ));
    try {
      await this.$axios.$patch(
        query, data, {
          headers: {
            Authorization: this.$auth.Token
          }
        }
      )
      return null
    } catch (error) {
      alert('error en login ' + error)
      return error
      // this.$router.push({ name: 'index' })
    }
  },
  async logout({
    commit
  }) {
    const uservoid = {
      id: '',
      ttl: '',
      created: '',
      userId: '',
      email: '',
      matriz_cif: '',
      matriz_nombre: '',
      matriz_dir: '',
      matriz_pob: '',
      matriz_cp: '',
      matriz_tel: '',
      matriz_obs: '',
      matriz_contacto: {
        nombre: '',
        apellido: ''
      },
      role: '',
      precioPSS: 99
    }
    try {
      await this.$axios.$delete('/mg/authentication', {
        headers: {
          Authorization: this.$auth.Token
        }
      })
      commit('setUser', uservoid)
      return null
    } catch (error) {
      alert('error en logout ' + error)
      return error
    }
  },
  async createSkus({
    commit
  }, payload) {
    const query = '/payments/charges'
    try {
      const sku = await this.$axios.$post(query, payload, {
        headers: {
          Authorization: this.$auth.Token
        }
      })
      return sku
    } catch (error) {
      alert('error en el post de sku para el create' + error)
      return error
    }
  }
 }
