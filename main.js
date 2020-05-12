Vue.component('navbar', {
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
                        <img class="avatar dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="images/nrf_portrait.jpg" />
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

var app = new Vue({
    el: '#app',
    data: {
        autor: {
            name: 'Nicolas Graf von Rosty-Forgách',
            bio: "Er ist als ungarischer Diplomatensohn in Prag geboren. Seine Kindheit "
            + "verbrachte er auf den Schlössern seiner Familie.  Nach dem Krieg wurde die"
            + " Familie enteignet und wanderte als Flüchtlinge nach Südamerika aus. Der "
            + "Autor nahm die chilenische Staatbürgerschaft an, heiratete eine Deutsche. "
            + "Mit zwei Kindern kehrt die junge Familie nach Europa zurück. Er lebt nun "
            + "mit seiner Frau in Lenggries, Bayern."
        }
    }
})

Vue.config.devtools = true;