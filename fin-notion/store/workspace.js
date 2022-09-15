import { defineStore } from "pinia";
import axios from "axios"

export const useWorkspaceStore = defineStore('workspace', {
    state : () => ({
        workspace : []
    }),
    actions : {
        async readWorkspaces() {
            await request({
                method : "GET",
            })
        }
    }, 
    // getters : {}
})

async function request(options){
    const {id  ='', method, body} = options;
    const {data} = await axios({
        url : `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`,
        headers: {
            'content-type': 'application/json',
            'apikey': 'FinTech202207',
            'username': 'ParkYoungWoong'
          },
        method : method,
        data : body,
    })
    return data
}