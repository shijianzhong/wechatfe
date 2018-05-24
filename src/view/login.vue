<template>
    <div class="login_mainwrap" id="loginmainwrap">
        <img :src="imgurl" alt="">
    </div>
</template>
<script>
import { getLoginUrl } from "../../api";
import QRCode from "qrcode";
export default {
  data() {
    return {
      imgurl:"",
      loginurl
    };
  },
  created() {
    getLoginUrl().then(x => {
      console.log(x);
    });
  },
  mounted() {
    QRCode.toDataURL("I am a pony!")
      .then(url => {
        this.imgurl = url;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

