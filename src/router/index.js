import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Antecedentes',
        name: 'myhistory',
        component: () =>
            import ('@/views/about/history.vue')
    }, {
        path: '/QuienesSomos',
        name: 'whoWeAre',
        component: () =>
            import ('@/views/about/weare.vue')
    },
    {
        path: '/Integrantes',
        name: 'members',
        component: () =>
            import ('@/views/about/members.vue')
    },
    {
        path: '/Directorio',
        name: 'board',
        component: () =>
            import ('@/views/about/board.vue')
    },
    {
        path: '/Comunicados',
        name: 'releases',
        component: () =>
            import ('@/views/media/releases.vue')
    },
    {
        path: '/Galeria',
        name: 'gallery',
        component: () =>
            import ('@/views/media/gallery.vue')
    },
    {
        path: '/LecturaRecomendada',
        name: 'reading',
        component: () =>
            import ('@/views/media/reading.vue')
    },
    {
        path: '/TransparenciaProactiva',
        name: 'transparency-pro',
        component: () =>
            import ('@/views/transparency/transparency-pro.vue')
    },
    {
        path: '/UnidadDeTrasnparencia',
        name: 'unit-transparency',
        component: () =>
            import ('@/views/transparency/unit-transparency.vue')
    },
    {
        path: '/InformaciónFinancierayPresupuestal',
        name: 'transparency-seseay',
        component: () =>
            import ('@/views/transparency/transparency-seseay.vue')
    },
    {
        path: '/MarcoJuridico',
        name: 'legal',
        component: () =>
            import ('@/views/transparency/legal.vue')
    },
    {
        path: '/AvisosdePrivacidad',
        name: 'privacy',
        component: () =>
            import ('@/views/transparency/privacy.vue')
    },
    {
        path: '/Compliance',
        name: 'compliance',
        component: () =>
            import ('@/views/ourwork/compliance.vue')
    },
    {
        path: '/Publicaciones',
        name: 'publications',
        component: () =>
            import ('@/views/ourwork/publications.vue')
    },
    {
        path: '/Recomendaciones',
        name: 'recommendations',
        component: () =>
            import ('@/views/ourwork/recommendations.vue')
    },
    {
        path: '/Convenios',
        name: 'collaborations',
        component: () =>
            import ('@/views/ourwork/collaborations.vue')
    },
    {
        path: '/ComitésDeEticaEstudiantil',
        name: 'ethics',
        component: () =>
            import ('@/views/ourwork/ethics.vue')
    },
    {
        path: '/Blog',
        name: 'blog',
        component: () =>
            import ('@/views/storyindex.vue')
    },
    {
        path: '/Revista',
        name: 'magazine',
        component: () =>
            import ('@/views/ourwork/magazine.vue')
    },
    {
        path: '/MecanismoDeQueja',
        name: 'mq',
        component: () =>
            import ('@/views/mq/mq.vue')
    },
    {
        path: '/contacto',
        name: 'contact',
        component: () =>
            import ('@/views/contact.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router