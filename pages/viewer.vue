<template>
  <div class="fco-kollus-video" ref="kollusVideoViewer">
    <div class="fco-kollus-video__full-screen" @click.stop="fullScreen" ref="fullScreenMask"></div>
    <iframe :src=clipVideoUrl
            class="fco-kollus-video__viewer"
            ref="kollusViewer"
            allow="autoplay"
            allowfullscreen
    ></iframe>
    <button ref="btn" @click="btnTest">{{isCall}}</button>
  </div>
</template>

<script>

  import {secondsToTime} from '../core/util/date';
  import {getClipVideoUrl} from '../core/util/kollusSupport';
  import {toggleFullScreen} from '../core/util/video';

  export default {
    name: 'kollus-video-viewer',
    props: {
      mediaToken: {
        type: String,
        default: '',
      },
      forcePosition: {
        type: Number,
        default: 0,
      },
      userId: {
        type: Number,
        default: 0,
      },
      courseId: {
        type: Number,
        default: 0,
      },
      player: {
        type: Object,
        default() {
          return {};
        },
      },
      isAutoPlay: {
        type: Boolean,
        default: true,
      },
      isForcePlay: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        vgController: null,
        polling: null,
        isCall: '자동 호출 전',
      };
    },
    computed: {
      clipVideoUrl() {
        const testUrl = 'eyJhbGciOiJIUzI1NiJ9.eyJjdWlkIjoiZmFzdGNhbXB1cy10ZXN0IiwiZXhwdCI6IjE1NjQwNzMxMDc2OTQiLCJtYyI6W3sibWNrZXkiOiJKSUJZRmQ0eCJ9XX0.RTlhs2ngGr6aQZLfRxEcnfMAeETYYEBD0RQDpjFX3qw';
        return getClipVideoUrl(testUrl);
      },
      isActiveNScreen() {
        return this.player.position !== 0 && !this.isForcePlay;
      },
      nScreenTime() {
        return secondsToTime(this.player.position);
      },
    },
    watch: {
      mediaToken() {
        this.stopPlayRecord();
        this.loadVgController();
      },
      forcePosition(next) {
        this.play(next);
      },
    },
    methods: {
      play(position = 0) {
        // XXX 플레이어 재생이 한번도 안될 경우 아무리 시간을 넣어 주어도 0초로 재생되어 우회하였으나 개선필요...
        // 참조 : https://github.com/fastcampusgit/v2/issues/796
        this.vgController.play();
        setTimeout(() => this.vgController.play(position), 100);
      },
      btnTest() {
        this.isCall = '자동 호출 완료';
        this.play(40);
      },
      fullScreen() {
        toggleFullScreen(this.$refs.kollusVideoViewer);
      },
      loadVgController() {
        try {


          //todo update 이벤트시 기존 VgControllerClient 지우고 새로 할당하기 위함. 좀더 깔끔한 방법을 찾아 보아야.
          if (typeof this.vgController === 'object') {
            this.vgController = null;
          }

          this.vgController = new window.VgControllerClient({target_window: this.$refs.kollusViewer.contentWindow});


          this.vgController.on('ready', () => {
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
      createMaskEventListener() {
        this.$refs.fullScreenMask.addEventListener("touchstart", this.fullScreen);
      },
      deleteMaskEventListener() {
        this.$refs.fullScreenMask.removeEventListener("touchstart", this.fullScreen);
      },
    },
    mounted() {
      this.createMaskEventListener();
      this.loadVgController();
    },
    beforeDestroy() {
      this.vgController = null;
      this.deleteMaskEventListener();
    },
  };
</script>

<style scoped>

  .fco-kollus-video__viewer {
    width: 100%;
    height: 100%;
    border: none;
  }

  .fco-kollus-video__full-screen {
    position: absolute;
    bottom: 0;
    right: 4rem;
    width: 4rem;
    height: 4rem;
  }

  .fco-kollus-video {
    width: 100%;
    height: 100%;
  }


</style>
