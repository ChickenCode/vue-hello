const app = new Vue(
    {
    el: '#root',
    data: {
        message: "Scritto tramite vueJS",
        image: "",
        myClass: "contain"
    },
    methods: {
        openImage() {
            this.image = 'img/fernet_logo.png'
        },
        closeImage() {
            this.image = ''
        }
    }
}
)