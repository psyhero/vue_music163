import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useSongsList = defineStore('songs_list', () => {
  const songs_list = reactive([
    {
      id: 1,
      name: '飙升榜',
      pic: '/src/assets/10074.jpg',
      songs: [
        { id: 1, name: '孤独患者' },
        { id: 2, name: '谎言' },
        { id: 3, name: '白色风车' },
        { id: 4, name: '谎言' },
        { id: 5, name: '谎言' },
        { id: 6, name: '谎言' },
        { id: 7, name: '谎言' },
        { id: 8, name: '谎言' },
        { id: 9, name: '谎言' },
        { id: 10, name: '谎言' },
      ],
    },
    {
      id: 2,
      name: '新歌榜',
      pic: '/src/assets/10077.jpg',
      songs: [
        { id: 1, name: 'APT.' },
        { id: 2, name: '谎言' },
        { id: 3, name: '白色风车' },
        { id: 4, name: '不懂她' },
        { id: 5, name: '谎言' },
        { id: 6, name: '谎言' },
        { id: 7, name: '谎言' },
        { id: 8, name: '谎言' },
        { id: 9, name: '谎言' },
        { id: 10, name: '谎言' },
      ],
    },
    {
      id: 3,
      name: '原创榜',
      pic: '/src/assets/10075.jpg',
      songs: [
        { id: 1, name: '来呀去呀' },
        { id: 2, name: '一场山火' },
        { id: 3, name: '白色风车' },
        { id: 4, name: 'VTTT' },
        { id: 5, name: '谎言' },
        { id: 6, name: '谎言' },
        { id: 7, name: '谎言' },
        { id: 8, name: '谎言' },
        { id: 9, name: '谎言' },
        { id: 10, name: '谎言' },
      ],
    },
  ])

  return { songs_list }
})
