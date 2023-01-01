import { defineStore } from "pinia";
import { getDetailInfos } from '@/services'

const useDetailStore = defineStore('detail', {
  state: () => {
    return {
      houseId: '',
      detailInfos: {}
    }
  },
  actions: {
    async getDetailInfosResult() {
      const detailInfosResult = await getDetailInfos(this.houseId)
      this.detailInfos = detailInfosResult.data
    }
  }
})

export default useDetailStore