Vue.component('navbar', {
    props: {
        author: {
            type: Object,
            required: true,
            validator: function (value) {
                return 'image' in value
            }
        }
    },
    template: `
        <div class="navbar navbar-expand-sm navbar-light navbar-lewagon">
            <a class="navbar-brand" href="#">
                <img src="images/einhorn.png" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Der Autor</a>
                    </li>
                    <li class="nav-item dropdown">
                        <img class="avatar dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :src="author.image" />
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
})

Vue.component('author-card', {
    props: {
        author: {
            type: Object,
            required: true,
            validator: function (value) {
                return 'image' in value
            }
        }
    },
    template: `
        <div class="card-product bottom-two">
            <img :src="author.image" />
            <div class="card-product-infos">
            <h2>Der Autor</h2>
            <p>{{ author.bio }}</p>
            </div>
        </div>
    `
})

Vue.component('books-pres', {
    props: {
        books: {
            type: Array,
            required: true,
            validator: function (value) {
                return value.length > 0
            }
        }
    },
    data() {
        return {
            markedBook: 0
        }
    },
    template: `
        <div class="small-pics">
            <img v-for="book in books" :src="book.bookImage">
        </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        author: {
            name: 'Nicolas Graf von Rosty-Forgách',
            image: 'images/nrf_portrait.jpg',
            bio: "Er ist als ungarischer Diplomatensohn in Prag geboren. Seine Kindheit "
            + "verbrachte er auf den Schlössern seiner Familie.  Nach dem Krieg wurde die"
            + " Familie enteignet und wanderte als Flüchtlinge nach Südamerika aus. Der "
            + "Autor nahm die chilenische Staatbürgerschaft an, heiratete eine Deutsche. "
            + "Mit zwei Kindern kehrt die junge Familie nach Europa zurück. Er lebt nun "
            + "mit seiner Frau in Lenggries, Bayern."
        },
        books: [
            {
                bookId: 0,
                bookTitle: 'Jenseits der goldenen Wiege',
                bookImage: 'images/jenseits_der_goldenen_wiege.jpg',
                bookDescription: 'Als Kind mit strengen Schlossmanieren aufgewachsen, nach dem zweiten Weltkrieg aus der Heimat vertrieben, in einem spartanischen Internat ‚zwischengelagert‘, als Jugendlicher nach Südamerika emigriert und in den chilenischen Urwald ausgerissen, schließlich als Ehemann und Vater auf Mallorca gelandet, im Massentourismus um eine Existenz gekämpft.'
            },
            {
                bookId: 1,
                bookTitle: 'Begegnung in der Sierra Nevada',
                bookImage: 'images/begegnung_in_der_sierra_nevada.jpg',
                bookDescription: 'Eine Geschäftsfrau trifft im Urlaub eine Hamburger Familie, deren Tochter in ihr eine Ersatzmutter sieht. Ihr selbst gefällt der Vater, der sie aber bitter enttäuscht. Ihr Leben gerät aus den Fugen.'
            },
            {
                bookId: 2,
                bookTitle: 'Das unsichtbare Paradies',
                bookImage: 'images/das_unsichtbare_paradies.jpg',
                bookDescription: 'Ein Geschäftsmann lässt Job und Eheprobleme hinter sich und erfährt ihm unbekannte neue Gefühle.'
            }
        ]
    }
})

Vue.config.devtools = true;