// StartScreen.js  (Options API — igual que tu código original)

export default {
  name: 'StartScreen',

  data() {
    return {
      audioOn: this.$audio.enabled   
    }
  },

  mounted() {
    this.$audio.play()
  },

  methods: {
    startGame() {
      this.$router.push('/map')
    },

    shutDownAudio() {
      this.audioOn = this.$audio.toggle()   
    }
  }
}