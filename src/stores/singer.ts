import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useSingerList = defineStore('singer_list', () => {
  const singer_list = reactive([
    {
      id: 1,
      src: '/src/assets/10053.jpg',
      name: '张惠妹',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 2,
      src: '/src/assets/10054.jpg',
      name: '吴莫愁',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 3,
      src: '/src/assets/10055.jpg',
      name: '孙楠',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 4,
      src: '/src/assets/10057.jpg',
      name: '麦田老狼',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 5,
      src: '/src/assets/10058.jpg',
      name: '陈楚生',
      intro: '台湾歌手张惠妹',
    },
  ])

  const anchor_list = reactive([
    {
      id: 1,
      src: '/src/assets/10068.jpg',
      name: '陈立',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 2,
      src: '/src/assets/10072.jpg',
      name: '刘维',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 3,
      src: '/src/assets/10073.jpg',
      name: '莫非定律乐团',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 4,
      src: '/src/assets/10076.jpg',
      name: '碎嘴许美达',
      intro: '台湾歌手张惠妹',
    },
    {
      id: 5,
      src: '/src/assets/10078.jpg',
      name: '银临Rachel',
      intro: '台湾歌手张惠妹',
    },
  ])

  const singer_len = ref(singer_list.length)
  const anchor_len = ref(anchor_list.length)

  return { singer_list, singer_len, anchor_list, anchor_len }
})
