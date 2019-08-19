var app = new Vue({
    el: '#app',
    data: {
        app: {
            title: "Startup",
            loaded: false,
            description: "A startup project"
        },
        services: [
            { title: 'Maintenance', description: '', icon: 'cogs icon', link:'#' },
            { title: 'Installation', description: '', icon: 'truck icon', link:'#' },
            { title: 'Repair', description: '', icon: 'wrench icon', link:'#' },
            { title: 'Cleaning', description: '', icon: 'tint icon', link:'#' },
            { title: 'Renovation', description: '', icon: 'paint brush icon', link:'#' },
        ],
        help: {
            mail: 'temporaryemail@gmail.com',
            phone: '+9100000000'
        },
        navigation: {
            pages: [
                { title: 'Home', link: '#', icon: 'home icon' },
                { title: 'Services', link: '#', icon: 'truck icon' },
                { title: 'Prices', link: '#', icon: 'money icon' },
                { title: 'Contact', link: '#', icon: 'phone icon' },
            ]
        }
    },
    methods: {
        OpenSidebar() {
            $(this.$refs.sidebar).sidebar({
                context: '#app > .segment',
                transition: 'scale down'
            }).sidebar('toggle');
        }
    },
    mounted() {
        $('.feature-cards').each(function(index, element) {
            setTimeout(function () {
                setInterval(function () {
                    $(element).shape('flip over');
                }, 5000);
            }, index * 1000);
        });
        $('.ui.embed').embed();
        this.app.loaded = true;
    }
})