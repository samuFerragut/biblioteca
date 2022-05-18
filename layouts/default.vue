<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-treeview v-model="tree" :items="items" :open="initiallyOpen">
        <template #label="{ item }">
          <router-link
            v-if="item.to"
            style="text-decoration: none; color: white"
            :to="item.to"
            >{{ item.name }}</router-link
          >
          <v-list-item v-else>{{ item.name }}</v-list-item>
        </template>
        <template #prepend="{ item, open }">
          <v-icon v-if="!item.icon">
            {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          <v-icon v-else>
            {{ item.icon }}
          </v-icon>
        </template>
      </v-treeview>
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="name" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; Jovent {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'defaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      initiallyOpen: ['Administracion'],
      tree: [],
      items: [
        {
          icon: 'mdi-home',
          name: 'Empresas y Trabajadores',
          to: 'dashlistemptrab'
        },
        // {
        //   icon: 'mdi-send',
        //   name: 'Enviar Reconocimiento',
        //   to: '/sendrecono'
        // },
        // {
        //   // icon: 'mdi-cog local_laundry_service',
        //   icon: 'mdi-washing-machine',
        //   name: 'Maquinas',
        //   to: '/maquinas'
        // },
        {
          icon: 'mdi-account-tie',
          name: 'Asesores',
          to: '/dashlistasesores'
        },
        {
          icon: 'mdi-clipboard-list',
          name: 'Listas Trabajo Lab',
          to: '/dashlistatrabajo'
        },
        {
          icon: 'mdi-test-tube',
          name: 'Resultados Analiticas',
          to: '/dashlistanaliticas'
        },
        {
          icon: 'mdi-flask',
          name: 'Tramas',
          to: '/dashlisttramas'
        },
        {
          name: 'Administracion',
          children: [
            {
              icon: 'mdi-clipboard',
              name: 'Mutuas',
              to: '/dashlistmutuas'
            },
            {
              icon: 'mdi-clipboard',
              name: 'Tipos clientes',
              to: '/dashlisttiposclientes'
            },
            {
              icon: 'mdi-wallet-travel',
              name: 'Profesionales',
              to: '/dashlistprofesionales'
            },
            {
              icon: 'mdi-compass',
              name: 'Exploraciones',
              to: '/dashlistexploraciones'
            },
            {
              icon: 'mdi-cog',
              name: 'Complementarias',
              to: '/dashlistcomplementarias'
            },
            {
              icon: 'mdi-test-tube',
              name: 'Perfiles Determinaciones',
              to: '/dashperfildeterminaciones'
            },
            {
              icon: 'mdi-microscope',
              name: 'Determinaciones',
              to: '/dashlistdeterminaciones'
            },
            {
              icon: 'mdi-clipboard-outline',
              name: 'Predefinidos',
              to: '/dashlistpredefinidos'
            },
            {
              icon: 'mdi-account-convert',
              name: 'Puesto trabajo',
              to: '/dashlistprotocolos'
            },
            // {
            //   icon: 'mdi-file-arrow-left-right-outline', // mdiFileArrowLeftRightOutline
            //   name: 'cambioenbasededatos',
            //   to: '/cambiobasedatos'
            // }
          ]
        },
        {
          name: 'Listados',
          icon: 'mdi-format-list-bulleted',
          children: [
            {
              icon: 'mdi-briefcase',
              name: 'Empresas',
              to: '/tipoEmpresa'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      name: 'Biblioteca Jovent'
    }
  }
}
</script>
