// flat fees and taxes
var customsFee          = 5.5;
var immigrationFee      = 7;
var federalTransportTax = .025;

function calculateAirfare(baseFare) {
    var fare = baseFare;
    fare += immigrationFee;
    fare += customsFee; // fixed by bobby
    fare *= (1 + federalTransportTax);
    return fare;
}
