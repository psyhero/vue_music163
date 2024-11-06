import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useSongStore = defineStore('songs', () => {
  const songlist = reactive([
    {
      id: 1,
      pic: '/src/assets/10223.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 2,
      pic: '/src/assets/10224.jpg',
      title: '古典清香|我的茶馆里住着巴赫与肖邦',
      plays: 3025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 3,
      pic: '/src/assets/10225.jpg',
      title: '100首华语民谣，因为懂得才有共鸣',
      plays: 12235,
      has_audio: true,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 4,
      pic: '/src/assets/10226.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 5,
      pic: '/src/assets/10227.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: true,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 6,
      pic: '/src/assets/10228.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 7,
      pic: '/src/assets/10229.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
    {
      id: 8,
      pic: '/src/assets/10230.jpg',
      title: '别整太多压力，要多鸡力自己',
      plays: 2025,
      has_audio: false,
      intro: '每日歌曲推荐',
      showintro: false,
    },
  ])

  const personal_songs = reactive([
    {
      id: 1,
      pic: '/src/assets/10051.jpg',
      title: '私人雷达',
      plays: 225,
      has_audio: false,
      intro: '猜你喜欢',
      showintro: true,
    },
    {
      id: 2,
      pic: '/src/assets/10049.jpg',
      title: '《生化危机》原声',
      plays: 1775,
      has_audio: false,
      intro: '根据常听推荐',
      showintro: true,
    },
    {
      id: 3,
      pic: '/src/assets/10050.jpg',
      title: '【黑金属十一】第一浪潮',
      plays: 575,
      has_audio: false,
      intro: '金属',
      showintro: true,
    },
  ])

  const new_album = reactive([
    {
      id: 1,
      pic: '/src/assets/10061.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 2,
      pic: '/src/assets/10062.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 3,
      pic: '/src/assets/10063.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 4,
      pic: '/src/assets/10064.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 5,
      pic: '/src/assets/10065.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 6,
      pic: '/src/assets/10066.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 7,
      pic: '/src/assets/10067.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 8,
      pic: '/src/assets/10069.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 9,
      pic: '/src/assets/10070.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
    {
      id: 10,
      pic: '/src/assets/10071.jpg',
      name: 'Moon Music',
      singer: 'Coldplay',
    },
  ])

  return { songlist, personal_songs, new_album }
})
