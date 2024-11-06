import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/discover',
      // component: () => import('../views/home/TheDiscover.vue'),
      children: [
        {
          path: 'discover',
          component: () => import('../views/home/TheDiscover.vue'),
        },
        {
          path: 'discover/toplist',
          component: () => import('../views/home/TheToplist.vue'),
        },
        {
          path: 'discover/playlist',
          component: () => import('../views/home/ThePlayList.vue'),
        },
        {
          path: 'discover/djaudio',
          component: () => import('../views/home/TheDjRadio.vue'),
        },
        {
          path: 'discover/artist',
          component: () => import('../views/home/TheArtist.vue'),
        },
        {
          path: 'discover/newalbum',
          component: () => import('../views/home/TheNewAlbum.vue'),
        },
      ],
    },
    {
      path: '/my',
      component: () => import('../views/MyMusic.vue'),
    },
    {
      path: '/follow',
      component: () => import('../views/MyFollow.vue'),
    },
    {
      path: '/mall',
      component: () => import('../views/MusicMall.vue'),
    },
    {
      path: '/musician',
      component: () => import('../views/MusicMan.vue'),
    },
    {
      path: '/adsong',
      component: () => import('../views/AdSong.vue'),
    },
    {
      path: '/download',
      component: () => import('../views/DownLoad.vue'),
    },
  ],
})

export default router
