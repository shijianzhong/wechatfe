<template>
  <div class="main">
    <mt-navbar v-model="selected" :fixed="true">
      <mt-tab-item id="1">车寻人</mt-tab-item>
      <mt-tab-item id="2">人寻车</mt-tab-item>
      <mt-tab-item id="3">待定</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div >
          <div class="infoitem" v-for="(item,index) in listData" :key="index">
            <info :itemi="item"></info>
          </div>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...<br> 京ICP备17071737号
          </p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
          <div class="infoitem" v-for="(item,index) in listData" :key="index">
            <info :itemi="item"></info>
          </div>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...<br> 京ICP备17071737号
          </p>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-for="(item,index) in list" :key="index">
          <img  class="bigimage" :src="item">
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import info from "../components/info";
export default {
  data() {
    return {
      selected: "1",
      loading: false,
      listData: [], //车寻人
      listData1: [], //人寻车
      page: 1,
      list: [
        '../../static/e.png',
        '../../static/xcx.jpg',
        '../../static/gzh.jpg',
        "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg",
        "http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg",
        "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
        "http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg",
        "http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg",
        "http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg"
      ]
    };
  },
  components: {
    info
  },
  watch: {
    selected(val) {
      this.page = 1;
      this.loading=false;
      this.getCarInfo(this.page).then(data => {
        if (data.code == 0) {
          this.listData = data.data.filter(
            x => x.jsonData.type == this.selected
          );
        }
      });
    }
  },
  methods: {
    ...mapActions(["getCarInfo"]),
    loadMore() {
      this.loading = true;
      console.log(this.page);
      this.getCarInfo(this.page).then(data => {
        if (data.code == 0) {
          data.data.forEach(element => {
            if (element.jsonData.type == this.selected) {
              this.listData.push(element);
            }
          });
          this.loading = false;
          this.page++;
        }
      });
    }
  },
  created() {
    this.getCarInfo(this.page).then(data => {
      if (data.code == 0) {
        this.listData = data.data.filter(x => x.jsonData.type == this.selected);
      }
    });
  }
};
</script>
<style>
.bigimage{
  height: auto;
  width: 300px;
}
.infoitem {
  margin-bottom: 15px;
  margin-top: 15px;
  border-bottom: 1px dotted #0099ff;
}
.page-lazyload-list {
  text-align: center;
}
.page-lazyload-listitem {
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #ddd;
}
.page-lazyload-image {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

