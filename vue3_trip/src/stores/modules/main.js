import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => {
    return {
      startDate: startDate,
      endDate: endDate,
      days: 1
    }
  }
})

export default useMainStore