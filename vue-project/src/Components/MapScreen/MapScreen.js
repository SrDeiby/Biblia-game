export default {
  name: 'MapScreen',

  data() {
    return {
      selectedRegion: null,
      hoveredRegion: null,
      regionData: {
        'Galilea': {
          icon: '🐟',
          desc: 'Tierraa de pescadores y milagros. Jesús pasó gran parte de su ministerio aquí.'
        },
        'Nazaret': {
          icon: '🏡',
          desc: 'Ciudad donde Jesús creció con María y José antes de su ministerio público.'
        },
        'Jerusalén': {
          icon: '✡️',
          desc: 'La Ciudad Santa. Lugar del Templo, la Última Cena, la crucifixión y la resurrección.'
        },
        'Belén': {
          icon: '⭐',
          desc: 'Ciudad del nacimiento de Jesús y ciudad natal del rey David.'
        }
      }
    }
  },

  methods: {
    selectRegion(name) {
      this.selectedRegion = name
    },

    goHome() {
  this.$router.push('/')
},

    goToGame() {
      const routeMap = {
        'Belén':     'belen',
        'Jerusalén': 'jerusalen',
        'Galilea':   'galilea',
        'Nazaret':   'nazaret'
      }
      this.$router.push(`/game/${routeMap[this.selectedRegion]}`)
    }
  }
}