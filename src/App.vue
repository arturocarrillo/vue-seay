<template>
  <v-app>
    <v-card tile class="overflow-hidden">
      <v-app-bar flat color="teal darken-4" app dark>
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-img
          alt="SESEAY"
          class="shrink mr-2"
          contain
          src="https://seay.org.mx/img/logo-mini-white.png"
          transition="scale-transition"
          width="130"
          link
          to="/"
        />
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text to="/">Inicio</v-btn>

          <v-menu
            :rounded="rounded"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on"> Conocenos </v-btn>
            </template>
            <v-list teal>
              <v-list-item
                v-for="(item, index) in about"
                :key="index"
                router
                :to="item.to"
              >
                <v-list-item-action>
                  <v-list-item-title
                    >{{ item.title }}
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu
            :rounded="rounded"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on"> Medios </v-btn>
            </template>
            <v-list teal>
              <v-list-item
                v-for="(item, index) in media"
                :key="index"
                router
                :to="item.to"
                link
              >
                <v-list-item-action>
                  <v-list-item-title
                    >{{ item.title }}
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu
            :rounded="rounded"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on"> Transparencia </v-btn>
            </template>
            <v-list teal>
              <v-list-item
                v-for="(item, index) in transparency"
                :key="index"
                router
                :to="item.to"
                link
              >
                <v-list-item-action>
                  <v-list-item-title
                    >{{ item.title }}
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu
            :rounded="rounded"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on"> Nuestro Trabajo </v-btn>
            </template>
            <v-list teal>
              <v-list-item
                v-for="(item, index) in work"
                :key="index"
                router
                :to="item.to"
                link
              >
                <v-list-item-action>
                  <v-list-item-title
                    >{{ item.title }}
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn text :to="{ name: 'mq' }">Mecanismo de Queja</v-btn>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                :to="{ name: 'contact' }"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon sm center>mdi-email</v-icon>
              </v-btn>
            </template>
            <span>Contacto</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                :to="{ name: 'privacy' }"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon sm center>verified_user</v-icon>
              </v-btn>
            </template>
            <span>Aviso de Privacidad</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text :to="{ name: 'legal' }" dark v-bind="attrs" v-on="on">
                <v-icon sm center>find_in_page</v-icon>
              </v-btn>
            </template>
            <span>Marco Jurídico</span>
          </v-tooltip>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense shaped v-model="selectItem">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          :to="item.to"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-model="selectItem"
            color="light-blue darken-4"
            v-for="child in item.items"
            :key="child"
            link
            :to="child.to"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-card flat tile class="teal darken-4 lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Con motivo de la creación del Sistema Nacional Anticorrupción, el 18
          de julio de 2016, se publicó en el Diario Oficial de la Federación, la
          Ley General del Sistema Nacional Anticorrupción, en cuyo artículo 36
          se establece que las leyes de las entidades federativas desarrollarán
          la integración, atribuciones, y funcionamiento de los Sistemas
          Locales. Lo anterior, motivó la reforma de la Constitución Política
          del Estado de Yucatán, en cuyo artículo 101 bis, se establece la
          creación del Sistema Estatal Anticorrupción de Yucatán, como la
          instancia de coordinación entre las autoridades del orden estatal y
          municipal competentes en la prevención, detección y sanción de
          responsabilidades administrativas y hechos de corrupción, así como en
          la fiscalización y control de recursos públicos.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>SESEAY</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: () => ({
    drawer: false,
    selectItem: 1,
    about: [
      {
        title: "Antecedentes",
        to: { name: "myhistory" },
      },
      {
        title: "¿Quienes somos?",
        to: { name: "whoWeAre" },
      },
      {
        title: "Integrantes",
        to: { name: "members" },
      },
      {
        title: "Directorio",
        to: { name: "board" },
      },
    ],
    media: [
      {
        title: "Comunicados",
        to: { name: "releases" },
      },
      {
        title: "Galería",
        to: { name: "gallery" },
      },
      {
        title: "Lectura Recomendada",
        to: { name: "reading" },
      },
    ],
    transparency: [
      {
        title: "Plataforma Nacional de Transparencia",
        to: { name: "" },
      },
      {
        title: "Sistema de Solicitudes de Información",
        to: { name: "" },
      },
      {
        title: "Transparencia Proactiva",
        to: { name: "transparency-pro" },
      },
      {
        title: "Unidad de Trasnparencia",
        to: { name: "unit-transparency" },
      },
      {
        title: "Información Financiera y Presupuestal",
        to: { name: "transparency-seseay" },
      },
      {
        title: "Marco Jurídico",
        to: { name: "legal" },
      },
      {
        title: "Avisos de Privacidad",
        to: { name: "privacy" },
      },
    ],
    work: [
      {
        title: "Curso Compliance Empresarial",
        to: { name: "compliance" },
      },
      {
        title: "Publicaciones",
        to: { name: "publications" },
      },
      {
        title: "Recomendaciones",
        to: { name: "recommendations" },
      },
      {
        title: "Convenios de Colaboración",
        to: { name: "collaborations" },
      },
      {
        title: "Comités de Ética Estudiantil",
        to: { name: "ethics" },
      },
      {
        title: "Blog",
        to: { name: "blog" },
      },
      {
        title: "Revista",
        to: { name: "magazine" },
      },
    ],
    items: [
      {
        action: "meeting_room",
        items: [{ title: "Inicio", to: { name: "home" } }],
        title: "Home",
      },
      {
        action: "groups",
        items: [
          {
            title: "Antecedentes",
            to: { name: "myhistory" },
          },
          {
            title: "¿Quienes somos?",
            to: { name: "whoWeAre" },
          },
          {
            title: "Integrantes",
            to: { name: "members" },
          },
          {
            title: "Directorio",
            to: { name: "board" },
          },
        ],
        title: "Conocenos",
      },
      {
        action: "perm_media",
        items: [
          {
            title: "Comunicados",
            to: { name: "releases" },
          },
          {
            title: "Galería",
            to: { name: "galery" },
          },
          {
            title: "Lectura Recomendada",
            to: { name: "reading" },
          },
        ],
        title: "Medios",
      },
      {
        action: "lock_open",
        items: [
          {
            title: "Plataforma Nacional de Transparencia",
            to: { name: "" },
          },
          {
            title: "Sistema de Solicitudes de Información",
            to: { name: "" },
          },
          {
            title: "Transparencia Proactiva",
            to: { name: "trasnparency-pro" },
          },
          {
            title: "Unidad de Trasnparencia",
            to: { name: "Unit-trasnparency" },
          },
          {
            title: "Información Financiera y Presupuestal",
            to: { name: "transparency-seseay" },
          },
          {
            title: "Marco Jurídico",
            to: { name: "legal" },
          },
          {
            title: "Avisos de Privacidad",
            to: { name: "privacy" },
          },
        ],
        title: "Transparencia",
      },
      {
        action: "home_repair_service",
        items: [
          {
            title: "Curso Compliance Empresarial",
            to: { name: "compliance" },
          },
          {
            title: "Publicaciones",
            to: { name: "publications" },
          },
          {
            title: "Recomendaciones",
            to: { name: "recommendations" },
          },
          {
            title: "Convenios de Colaboración",
            to: { name: "collaborations" },
          },
          {
            title: "Comités de Ética Estudiantil",
            to: { name: "ethics" },
          },
          {
            title: "Blog",
            to: { name: "blog" },
          },
          {
            title: "Revista",
            to: { name: "magazine" },
          },
        ],
        title: "Nuestro Trabajo",
      },
      {
        action: "mdi-email",
        title: "Contacto",
        to: { name: "contact" },
      },
      {
        action: "verified_user",
        title: "Avisos de Privacidad",
        to: { name: "privacy" },
      },
      {
        action: "find_in_page",
        title: "Marco Jurídico",
        to: { name: "legal" },
      },
    ],
    icons: ["mdi-facebook", "mdi-youtube", "mdi-email", "mdi-phone"],
  }),
};
</script>
