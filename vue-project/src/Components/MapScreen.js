

export default {
  name: 'MapScreen',
 


  data() {
    return {
      selectedRegion: null,
      hoveredRegion: null,
      regionData: {
        'Galilea': {
          icon: '🐟',
          desc: 'Tierra de pescadores y milagros. Jesús pasó gran parte de su ministerio aquí, llamando a sus primeros discípulos en sus orillas.'
        },
        'Nazaret': {
          icon: '🏡',
          desc: 'Ciudad donde Jesús creció con María y José. Aquí vivió la mayor parte de su vida antes de su ministerio público.'
        },
        'Jerusalén': {
          icon: '✡️',
          desc: 'La Ciudad Santa. Capital espiritual de Israel, lugar del Templo, la Última Cena, la crucifixión y la resurrección.'
        },
        'Belén': {
          icon: '⭐',
          desc: 'Ciudad del nacimiento de Jesús y ciudad natal del rey David. A solo 9 km al sur de Jerusalén.'
        }
      }
    }
  },
 
  methods: {
    selectRegion(name) {
      this.selectedRegion = name
      this.$emit('region-selected', name)
    }

  }
}