<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-flex v-for="item in history" :key="item">
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
  name: "text_history",
  data: () => ({
    history: [
      { title: "Antecedentes" },
      {
        ph: "Con motivo de la creación del Sistema Nacional Anticorrupción, el 18 de julio de 2016, se publicó en el Diario Oficial de la Federación, la Ley General del Sistema Nacional Anticorrupción, en cuyo artículo 36 se establece que las leyes de las entidades federativas desarrollarán la integración, atribuciones, y funcionamiento de los Sistemas Locales. Lo anterior, motivó la reforma de la Constitución Política del Estado de Yucatán, en cuyo artículo 101 bis, se establece la creación del Sistema Estatal Anticorrupción de Yucatán, como la instancia de coordinación entre las autoridades del orden estatal y municipal competentes en la prevención, detección y sanción de responsabilidades administrativas y hechos de corrupción, así como en la fiscalización y control de recursos públicos.",
      },
      {
        ph: "Derivado de lo anterior, en fecha 18 de julio de 2017, se publicó en el Diario Oficial del Gobierno del Estado de Yucatán, la Ley del Sistema Estatal Anticorrupción de Yucatán, siendo que el artículo 10 del citado ordenamiento, prevé que el Comité Coordinador del Sistema Estatal Anticorrupción sea instancia superior de coordinación del sistema, siendo uno de sus objetos establecer procedimientos para la coordinación entre los entes públicos en la prevención, detección y sanción de faltas administrativas y hechos de corrupción, así como en la fiscalización y control de recursos públicos.",
      },
      {
        ph: "Por otra parte, los artículos 22 y 23, fracción VII, de la mencionada Ley, establecen que el Comité de Participación Ciudadana es la instancia que tiene como objetivo coadyuvar al cumplimiento del objeto del comité coordinador, y que una de sus atribuciones es proponerle mecanismos para que la sociedad participe en la prevención y denuncia de faltas administrativas y hechos de corrupción. Lo anterior, refleja el espíritu del Sistema Estatal Anticorrupción de otorgar a los ciudadanos una participación directa, dinámica y activa en el combate a la corrupción, lo cual requiere la implementación de un mecanismo que permita exponer los hechos que se pretenden combatir, a través de la generación de políticas públicas integrales. ",
      },
      {
        ph: "Por su parte, los artículos 30 y 31 de la mencionada Ley, establecen que la Secretaría Ejecutiva del Sistema Estatal Anticorrupción es un organismo público descentralizado, con personalidad jurídica y patrimonio propio, con autonomía técnica y de gestión, y que tiene por objeto fungir como órgano de apoyo técnico del Comité Coordinador, a efecto de proveerle la asistencia técnica así como los insumos necesarios para el desempeño de sus atribuciones, conforme a lo dispuesto en la fracción III del artículo 101 Bis de la Constitución Política del Estado de Yucatán.",
      },
    ],
  }),
};
</script>