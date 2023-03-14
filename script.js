const app = Vue.createApp({
    // this is the 'component', an object that holds data, functions to react to events
    // template: '<h2> I am the template </h2>'  // stuff that vue will inject into the mounted area of the dom


    data() {            // data to replace the html content
        return {        // this function returns an object and adds properties to the component that can be read by the other methods
            showBooks: 'true',
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss'},
                { title: 'the way of kings', author: 'brandon sanderson'},
                { title: 'the final empire', author: 'brandon sanderson'}
            ]
        }       
    },
    methods: {
        // changeTitle(title) {
        //     this.title = title;
        //     // 'this' is needed to get the Vue component
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, number) {
            console.log(e, e.type);
            if(number) {
                console.log(number);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }

}); // creates a vue app (takes in an object)
// mount method tells where in the dom to mount the Vue (Vue only applies inside of that selected area).

app.mount('#app');