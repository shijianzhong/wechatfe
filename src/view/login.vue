<template>
    <div class="login_mainwrap">

    </div>
</template>
<script>
import {getLoginUrl} from '../../api'
export default {
    data(){
        return{

        }
    },
    created(){
        getLoginUrl().then(x=>{
            console.log(x);
        })
    }
}
</script>

