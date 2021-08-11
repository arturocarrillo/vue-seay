<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-flex v-for="item in weare" :key="item">
          <h2 class="text-title teal--text text--darken-4">{{ item.title }}</h2>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.ph }}
          </p>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "text_weare",
  data: () => ({
    weare: [
      { title: "¿Quiénes somos?" },
      {
        ph: "El Sistema Estatal Anticorrupción Yucatán es la instancia de coordinación entre las distintas autoridades estatales y municipales, las cuales se encargan de prevenir, investigar y sancionar los hechos de corrupción y las faltas administrativas, así como de la fiscalización y control de los recursos públicos; y cuenta con la participación de la sociedad civil a través de un Comité.",
      },
      {
        ph: "El Sistema se conforma por el Comité Coordinador, el Comité de Participación Ciudadana y la Secretaría Ejecutiva, quienes realizan un esfuerzo sinérgico que nos permite sumar esfuerzos y voluntades, entre autoridades, organizaciones y sociedad civil mediante su participación constructiva, colaborando a mejorar el desempeño gubernamental, luchando contra la impunidad que provoca e incentiva la corrupción.",
      },
      {
        ph: "El Sistema Estatal Anticorrupción de Yucatán se encarga de crear y dictar la política anticorrupción a nivel estatal, es por ello que es el ente público rector en esta materia.",
      },
    ],
  }),
};
</script>