<template>
  <div class="fco-kollus-video" ref="kollusVideoViewer">
    <iframe :src=kollusUrl
            class="fco-kollus-video__viewer"
            ref="kollusViewer"
            allow="autoplay"
            allowfullscreen
    ></iframe>
    <p>{{status}}</p>
    <button ref="btn" @click="playNote">노트기능 동작</button>
    <button @click="videoChange('test')">동영상 변경</button>
    <button @click="videoChange('next')">원본동영상 보기</button>
  </div>
</template>

<script>
  export default {
    name: 'kollus-viewer',
    props: {
      kollusUrl: {
        type: String,
        default: '',
      },
      activePosition: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        vgController: null,
        polling: null,
        isCall: '자동 호출 전',
        status:  '로드안됨.'
      };
    },
    watch: {
      kollusUrl() {
        this.loadVgController();
      },
    },
    methods: {
      play(position = 0) {
        // XXX 플레이어 재생이 한번도 안될 경우 아무리 시간을 넣어 주어도 0초로 재생되어 우회하였으나 개선필요...
        // 참조 : https://github.com/fastcampusgit/v2/issues/796
        this.vgController.play();
        setTimeout(() => this.vgController.play(position), 20);
      },
      playNote() {
        this.play(this.activePosition);
      },
      videoChange(position) {
        this.$router.push({
          name: 'viewer-position',
          params: {position},
        });
      },
      loadVgController() {
        try {


          //todo update 이벤트시 기존 VgControllerClient 지우고 새로 할당하기 위함. 좀더 깔끔한 방법을 찾아 보아야.
          if (typeof this.vgController === 'object') {
            this.vgController = null;
          }

          this.vgController = new window.VgControllerClient({target_window: this.$refs.kollusViewer.contentWindow});


          this.vgController.on('loaded', () => {
            this.status = '로딩준비완료';
          });

          this.vgController.on('ready', () => {
            this.status = '로딩래디완료';
          });

          this.vgController.on('play', () => {
          });

          this.vgController.on('pause', () => {
          });


          this.vgController.on('done', () => {
          });

        } catch (e) {
          console.log(e);
        }
      },
    },
    mounted() {
      this.loadVgController();
    },
    beforeDestroy() {
      this.vgController = null;
    },
  };
</script>

<style scoped>

  .fco-kollus-video__viewer {
    width: 100%;
    height: 80vh;
    border: none;
  }

  .fco-kollus-video {
    width: 100%;
    height: 100%;
  }


</style>
