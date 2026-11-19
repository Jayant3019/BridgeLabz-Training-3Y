// Q8. Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Method added to MovieTicket's prototype.
MovieTicket.prototype.printTicket = function () {
    console.log(
        `Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket Price: Rs. ${this.price}`
    );
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTickets = [
    new OnlineTicket("3 Idiots", "A10", 200, 25),
    new OnlineTicket("Dangal", "B12", 250, 30),
    new OnlineTicket("Taare Zameen Par", "C05", 180, 20)
];

onlineTickets.forEach(ticket => {
    // Inherited prototype method is available on OnlineTicket objects.
    ticket.printTicket();
    console.log("Convenience fee: Rs.", ticket.convenienceFee);
    console.log("Total amount: Rs.", ticket.getTotalAmount());
    console.log("Is MovieTicket prototype in chain?",
        MovieTicket.prototype.isPrototypeOf(ticket));
    console.log("-----------------------------");
});
