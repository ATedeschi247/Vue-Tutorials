const app = Vue.createApp({
    // this is the 'component', an object that holds data, functions to react to events
    // template: '<h2> I am the template </h2>'  // stuff that vue will inject into the mounted area of the dom


    data() {            // data to replace the html content
        return {        // this function returns an object and adds properties to the component that can be read by the other methods
            url: 'https://www.google.com',            
            showBooks: 'true',
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', isFav: true}
            ],
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