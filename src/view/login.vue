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
    };
  },
  mounted() {
    getLoginUrl().then(x => {
      console.log(x.loginUrl)
      QRCode.toDataURL(x.loginUrl)
      .then(url => {
        this.imgurl = url;
      })
      .catch(err => {
        console.error(err);
      });
    });
  }
};
</script>

