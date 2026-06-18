export default {
  name: 'StartScreen',

  data() {
    return {
      audioOn: this.$audio.enabled,
      showInstructions: false
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