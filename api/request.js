import axios from 'axios'
import cfg from '../config'

// axios.defaults.withCredentials = true;

const host =cfg.publicPath;

export default{
    get:(url,option,error)=>{
        return axios.get(host+url,option).then(response=>response.data)
        .catch(err=>{
            if(error){
                error(err)
            }else{
                console.log(err)
            }
        })
    },
    post:(url,data,option,error)=>{
        axios.post(host+url,data,option)
        .then(response=>response.data)
        .catch(err=>{
            if(error){
                error(err)
            }else{
                console.log(err)
            }
        })
    },   
    delete:(url,option,error)=>{
        axios.delete(host+url,option)
        .then(response=>{
            response.data
        })
        .catch(err=>{
            if(error){
                error(err)
            }else{
                console.log(err)
            }
        })
    }
}


