const app = Vue.createApp({
    data() {
        return {
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            productName: 'Book a Cruise to the Moon',
            product: {
                image: {
                    src: 'assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            booking: {
                cabinIndex: 0,
                notes: '',
                completed: false
            },
        }
    },
    methods: {
        bookCabin() {
            this.booking.completed = true;
        }
    },
    computed: {
        bookingCabinDisplay() {
            const cabin = this.product.cabins[this.booking.cabinIndex];
            return `${cabin.name}: R$ ${cabin.price.toLocaleString('pt-BR')}`
        }
    },
});