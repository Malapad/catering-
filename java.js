// models/Patron.js
const mongoose = require('mongoose');

const PatronSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    telephone: String,
    mobile: String
});

module.exports = mongoose.model('Patron', PatronSchema);

// models/Reservation.js
const ReservationSchema = new mongoose.Schema({
    bookingDate: Date,
    eventDate: Date,
    venue: String,
    cateringServices: String,
    reservationFee: String,
    termsOfPayments: String,
    cancellationCharges: String,
    patron: { type: mongoose.Schema.Types.ObjectId, ref: 'Patron' }
});

module.exports = mongoose.model('Reservation', ReservationSchema);

// models/Event.js
const EventSchema = new mongoose.Schema({
    celebrantName: String,
    affairKind: String,
    functionHall: String,
    theme: String,
    motif: String,
    eventDate: Date,
    startTime: String,
    endTime: String,
    reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }
});

module.exports = mongoose.model('Event', EventSchema);

// models/Venue.js
const VenueSchema = new mongoose.Schema({
    address: String,
    contactPerson: String,
    contactNumber: String,
    reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }
});

module.exports = mongoose.model('Venue', VenueSchema);

// models/CateringPackage.js
const CateringPackageSchema = new mongoose.Schema({
    coverage: Number,
    foodBeverageRequirements: String,
    venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' }
});

module.exports = mongoose.model('CateringPackage', CateringPackageSchema);
