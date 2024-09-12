const { createApp } = Vue

createApp({
  data() {
    return {
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      mails: [ ],
    }
  },
  methods: {

    getRandomMail(){
      for (let i = 1; i <= 10; i++){
        axios.get(this.apiUrl)
        .then((response) => {
          this.mails.push(response.data.response);
              }
            );
      }
 
     }
  },
  mounted(){
    this.getRandomMail();
  }
}).mount('#app')


