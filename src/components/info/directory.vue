<template>
  <v-card class="mt-4 mb-4">
    <v-card-title class="teal darken-4 white--text text-h5">
      Directorio Oficial - 2021
    </v-card-title>

    <v-row class="pa-4" justify="space-between">
      <v-col cols="5">
        <v-treeview
          :active.sync="active"
          :items="admon"
          :load-children="fetchEmployeesAdmon"
          :open.sync="open"
          activatable
          color="teal"
          open-on-click
          transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children"> mdi-account </v-icon>
          </template>
        </v-treeview>

        <v-treeview
          :active.sync="active"
          :items="juri"
          :load-children="fetchEmployeesJuridico"
          :open.sync="open"
          activatable
          color="warning"
          open-on-click
          transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children"> mdi-account </v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex text-center">
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selectedEmployee"
            class="text-h6 grey--text text--lighten-1 font-weight-light"
            style="align-self: center"
          >
            Seleccionar un Servidor Público
          </div>
          <v-card
            v-else
            :key="selectedEmployee.id"
            class="pt-6 mx-auto"
            flat
            max-width="400"
          >
            <v-card-text>
              <h3 class="text-h5 mb-2">
                {{ selectedEmployee.name }}
              </h3>
              <div class="blue--text mb-2">
                {{ selectedEmployee.email }}
              </div>
              <div class="blue--text subheading font-weight-bold">
                {{ selectedEmployee.username }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                Company:
              </v-col>
              <v-col>{{ selectedEmployee.company.name }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                Website:
              </v-col>
              <v-col>
                <a :href="`//${selectedEmployee.website}`" target="_blank">{{
                  selectedEmployee.website
                }}</a>
              </v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                Phone:
              </v-col>
              <v-col>{{ selectedEmployee.phone }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                Ext:
              </v-col>
              <v-col>{{ selectedEmployee.ext }}</v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  name: "directory",
  data: () => ({
    active: [],
    open: [],
    employeesAdmon: [],
    employeesJuridico: [],
  }),

  computed: {
    admon() {
      return [
        {
          name: "Administración y Finanzas",
          children: this.employeesAdmon,
        },
      ];
    },
    juri() {
      return [
        {
          name: "Jurídico",
          children: this.employeesJuridico,
        },
      ];
    },

    selectedEmployee() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return (
        this.employeesAdmon.find((user) => user.id === id) ||
        this.employeesJuridico.find((user) => user.id === id)
      );
    },
  },
  methods: {
    async fetchEmployeesAdmon(item) {
      await pause(1500);

      return fetch("http://localhost:3000/employeesAdmon")
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
    async fetchEmployeesJuridico(item) {
      await pause(1500);

      return fetch("http://localhost:3000/employeesJuridico")
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
  },
};
</script>