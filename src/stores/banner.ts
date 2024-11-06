import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const bannerStore = defineStore('banner', () => {
  const images = reactive([
    { id: 1, src: '/src/assets/10232.jpg' },
    { id: 2, src: '/src/assets/10233.jpg' },
    { id: 3, src: '/src/assets/10234.jpg' },
    { id: 4, src: '/src/assets/10235.jpg' },
    { id: 5, src: '/src/assets/10236.jpg' },
  ])

  const ban_id = ref(0)
  const ban_len = images.length
  const ban_src = ref(images[ban_id.value].src)

  const prev = () => {
    if (ban_id.value === 0) {
      ban_id.value = images.length - 1
    } else {
      ban_id.value -= 1
    }

    ban_src.value = images[ban_id.value].src
    start_timer()
  }

  const next = () => {
    if (ban_id.value === images.length - 1) {
      ban_id.value = 0
    } else {
      ban_id.value += 1
    }

    ban_src.value = images[ban_id.value].src
    start_timer()
  }

  let intervalId: number
  function start_timer() {
    if (intervalId) {
      clearInterval(intervalId)
    }

    intervalId = setInterval(() => {
      next()
    }, 5000)
  }

  return { ban_src, ban_len, prev, next }
})
