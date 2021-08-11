<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-flex v-for="item in cocoo" :key="item">
          <h2 class="text-title teal--text text--darken-4">{{ item.title }}</h2>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.subph }}
          </p>
          <h3 class="text-subtitle teal--text text--darken-4">
            {{ item.sub }}
          </h3>
          <ol
            class="text-subtitle text-justify grey--text text--darken-4"
            type="1,2,3"
          >
            <v-icon color="teal" class="sm">{{ item.icon }}</v-icon>
            {{
              item.list
            }}
          </ol>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.ph }}
          </p>
        </v-flex>
      </v-col>
      <v-col cols="12">
        <v-flex v-for="item in seseay" :key="item">
          <h2 class="text-title teal--text text--darken-4">{{ item.title }}</h2>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.subph }}
          </p>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.titlelist }}
          </p>
          <ol
            class="text-subtitle text-justify grey--text text--darken-4"
            type="1,2,3"
          >
            <v-icon color="teal" class="sm">{{ item.icon }}</v-icon>
            {{
              item.list
            }}
          </ol>
          <p class="text-subtitle text-justify grey--text text--darken-4">
            {{ item.ph }}
          </p>
        </v-flex>
      </v-col>
      <v-col cols="12">
        <v-flex v-for="item in cpc" :key="item">
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
  name: "text_members",
  data: () => ({
    cocoo: [
      { title: "Comité Coordinador" },
      {
        subph:
          "Es el eje rector del sistema estatal, conformado por los titulares o representantes de seis instituciones de gobierno y quien preside, cuya función es establecer, articular y evaluar las políticas públicas, procedimientos y principios entre los entes públicos para la prevención, disminución y combate a la corrupción. ",
      },
      { sub: "El Comité Coordinador está conformado por: " },
      {
        list: "Presidente del Comité de Participación Ciudadana en turno",
        icon: "arrow_forward_ios",
      },
      {
        list: "Titular de la Secretaría de la Contraloría General del Estado de Yucatán.",
        icon: "arrow_forward_ios",
      },
      {
        list: "Titular de la Auditoría Superior del Estado de Yucatán. ",
        icon: "arrow_forward_ios",
      },
      {
        list: "Presidente del Tribunal de Justicia Administrativa del estado de Yucatán.",
        icon: "arrow_forward_ios",
      },
      {
        list: "Titular de la Fiscalía Especiaddzada en Combate a la Corrupción.",
        icon: "arrow_forward_ios",
      },
      {
        list: "Presidente del Instituto Estatal de Transparencia, Acceso a la Información Púbddca y Protección de Datos Personales.",
        icon: "arrow_forward_ios",
      },
      {
        list: "Consejero del Consejo de la Judicatura del Poder Judicial del Estado de Yucatán.",
        icon: "arrow_forward_ios",
      },
      {
        ph: "El Comité Coordinador conjuga los esfuerzos particulares de cada una de las dependencias que lo conforman, mediante su coordinación, cooperación y comunicación, con la finalidad de lograr un combate a la corrupción más eficiente.",
      },
    ],
    seseay: [
      {
        title:
          "Secretaría Ejecutiva del Sistema Estatal Anticorrupción de Yucatán",
      },
      {
        subph:
          "La Secretaría Ejecutiva del Sistema Estatal Anticorrupción de Yucatán (SESEAY) es un organismo público descentralizado, no sectorizado, con personalidad jurídica y patrimonio propio, autonomía técnica y de gestión, funge como órgano de apoyo técnico del Comité Coordinador, a efecto de proveer asistencia técnica, así como los insumos necesarios para el desempeño de sus atribuciones, conforme a lo dispuesto en la Fracción III del artículo 101 bis de la Constitución Política del Estado de Yucatán.",
      },
      {
        titlelist:
          "La filosofía institucional de la SESEAY está fundada y establecida sobre valores universales que nos permiten entender la trascendencia de nuestra labor y que se traduce como una obligación y compromiso con México y con la sociedad yucateca; los principales son:",
      },
      {
        list: "Humildad",
        icon: "arrow_forward_ios",
      },
      {
        list: "Respeto",
        icon: "arrow_forward_ios",
      },
      {
        list: "Trabajo en Equipo",
        icon: "arrow_forward_ios",
      },
      {
        ph: "Asimismo, cabe mencionar los principios de legalidad, honradez, honestidad, equidad, igualdad, transparencia, eficiencia, eficacia, integridad, imparcialidad, entre otros que nos definen.",
      },
      {
        ph: "La Secretaría Ejecutiva se conforma por un mosaico multidisciplinario de servidores públicos, para quienes es de vital importancia fomentar y desarrollar actividades que deriven en proyectos, políticas públicas y buenas prácticas, con la intención de implementar acciones y mecanismos a fin de que permitan la detección y prevención de la corrupción en la gestión pública.",
      },
    ],
    cpc: [
      { title: "Comité de Participación Ciudadana" },
      {
        ph: "Es un consejo integrado por cinco ciudadanos mexicanos cuyo objetivo es coadyuvar a las entidades que conforman el Sistema Estatal Anticorrupción; proponiendo mecanismos para que la sociedad participe en la prevención, disminución y combate de hechos de corrupción y faltas administrativas.",
      },
      {
        ph: "Estos 5 ciudadanos son destacados por su probidad, solvencia moral y prestigio, son elegidos por una Comisión de Selección integrada por miembros de la academia y organizaciones de la sociedad civil, que a su vez son designados por el Congreso del Estado a través de una convocatoria abierta.",
      },
      {
        ph: "Duran 5 años en su encargo y la presidencia del C.P.C. se rota entre cada uno de los miembros por periodos de 1 año. El Comité de Participación Ciudadana es el canal de interacción entre la sociedad civil y las instituciones de gobierno, con la finalidad de incluir al ciudadano en la conformación de los informes, recomendaciones y políticas públicas necesarias para el buen funcionamiento del Sistema y el combate a la corrupción.",
      },
    ],
  }),
};
</script>