<template>
    <div class="infomain-wrap">
        <div class="uptime">{{itemi.dateUpdate||itemi.dateAdd}}</div>
        <div class="infomain-wrap-msg">
            <div>{{itemi.jsonData.msg}}</div>
            <div class="abc">
                <span class="a">
                    <a :href="'tel:'+itemi.jsonData.tel"><img src="../assets/tel.png" :alt="itemi.jsonData.tel"></a>
                </span>
                <span class="b">
                    <a :href="'sms:'+itemi.jsonData.tel"><img src="../assets/msg.png" :alt="itemi.jsonData.tel"></a>
                </span>
                <span class="c">
                    <img src="../assets/angle.png" :alt="itemi.jsonData.tel">{{itemi.jsonData.author}}
                </span>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    watch:{
        itemi:{
            handler(val){
            },
            immediate:true,
            deep:true,
        }
    },
    props:['itemi']
}
</script>
<style>
    img{
        width: 20px;
        height: 20px;
    }
    .uptime{
        color: orange;
    }
    .abc{
        overflow: auto;
    }
    .a,.b{
        float: right;
    }
    .a{
        margin-left: 10px;
    }
    .c{
        float: left;
    }
</style>

