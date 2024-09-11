const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      randomMail:'',
    }
  },
  methods: {
    getRandomMail(){
      axios.get(this.apiUrl)
    .then((response) => {
        console.log(response.data.response);
        this.randomMail = response.data.response
          }
        );
     }
  },
  mounted(){
    this.getRandomMail();
  }
}).mount('#app')



