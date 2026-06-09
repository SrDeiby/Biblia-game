import preguntas from '../../data/preguntas.json'


export default {
  name: 'GameScreen',

  data() {
    return {
      region: '',
      questions: [],
      currentIndex: 0,
      selectedOption: null,
      answered: false,
      isCorrect: false,
      score: 0,
      finished: false
    }
  },

  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex]
    },

    total() {
      return this.questions.length
    },

    progressPercent() {
      return ((this.currentIndex) / this.total) * 100
    },

    resultIcon() {
      const pct = this.score / this.total
      if (pct === 1)    return '🏆'
      if (pct >= 0.7)  return '⭐'
      if (pct >= 0.4)  return '📖'
      return '🙏'
    },

    resultTitle() {
      const pct = this.score / this.total
      if (pct === 1)    return '¡Perfecto!'
      if (pct >= 0.7)  return '¡Muy bien!'
      if (pct >= 0.4)  return 'Buen intento'
      return 'Sigue estudiando'
    },

    resultMessage() {
      const pct = this.score / this.total
      if (pct === 1)    return 'Conoces muy bien las escrituras sobre ' + this.region + '.'
      if (pct >= 0.7)  return 'Tienes buen conocimiento de ' + this.region + '. ¡Sigue así!'
      if (pct >= 0.4)  return 'Puedes mejorar. Repasa las escrituras sobre ' + this.region + '.'
      return 'No te desanimes. La Palabra siempre está lista para ser leída.'
    }
  },

  

mounted() {
  const displayNames = {
    'belen':     'Belén',
    'jerusalen': 'Jerusalén',
    'galilea':   'Galilea',
    'nazaret':   'Nazaret'
  }
  this.region = displayNames[this.$route.params.region]
  this.loadQuestions()
},

  methods: {
    loadQuestions() {
      const regionQuestions = preguntas[this.region]

      if (!regionQuestions || regionQuestions.length === 0) {
        console.warn(`No hay preguntas para la región: ${this.region}`)
        this.goBack()
        return
      }

      // Mezcla las preguntas para que no sean siempre en el mismo orden
      this.questions = [...regionQuestions].sort(() => Math.random() - 0.5)
    },

    answer(opcion) {
      if (this.answered) return

      this.selectedOption = opcion
      this.answered = true
      this.isCorrect = opcion === this.currentQuestion.respuesta

      if (this.isCorrect) {
        this.score++
      }
    },

    getOptionClass(opcion) {
      if (!this.answered) return ''

      if (opcion === this.currentQuestion.respuesta) return 'option-btn--correct'
      if (opcion === this.selectedOption)            return 'option-btn--wrong'
      return 'option-btn--disabled'
    },

    next() {
      if (this.currentIndex + 1 >= this.total) {
        this.finished = true
        return
      }

      this.currentIndex++
      this.selectedOption = null
      this.answered = false
      this.isCorrect = false
    },

    restart() {
      this.currentIndex = 0
      this.selectedOption = null
      this.answered = false
      this.isCorrect = false
      this.score = 0
      this.finished = false
      this.loadQuestions() // vuelve a mezclar
    },

    goBack() {
      this.$router.push('/map')
    }
  }
}