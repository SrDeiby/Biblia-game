
export default {
  name: 'StartScreen',
 
  mounted() {
    this.$audio.play()
  },
 
 
  methods: {
    startGame() {
      this.$router.push('/map')
    },
 
    ShutDownAudio() {
      this.$audio.toggle()
    }
  }
}
 