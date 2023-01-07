/*changing styling of navibar on scroll*/

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
})

/*drop down menu*/
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";    
})

/*closing drop down menu*/
const closeNav =()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav)

/*QR CODE*/
const endpoint = 'https://trial-api-qr-code-2izv.gw.openapihub.com/academicapi/qrcode';
 
new Vue({
    el: '#app',
    data() {
    return {
      qrcode_url: '',
      apikey: '',
      result: '',
      error: ''
    }
  },
  methods: {
    generate: function() {
        const param = `?qrcode_url=${this.qrcode_url}`
      const axiosConfig = {
        headers: {
          'content-type': 'application/json',
          'x-openapihub-key': this.apikey
        }
      }
     
    axios.get(`${endpoint}${param}`, axiosConfig)
        .then(res => {
        this.error = ''
        this.result = unescape(res.data)
      }).catch(err => {
          this.error = `Error occurred -<br>${err.response.data.message}`
          console.log('Error', err.response.data.message)
      })
    }
  }
})