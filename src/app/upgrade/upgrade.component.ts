import { Component } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent {
  offers = [
    {
      flight: 'YOW → YYZ',
      flightDetails: 'Air Canada Flight AC461, 1h 20m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 200,
      currentOffer: 130,
      numberOfBids: 53, // Number of competing bids
    },
    {
      flight: 'YYZ → DXB',
      flightDetails: 'Air Canada Flight AC56, 13h 5m',
      upgradeType: 'View your offer',
      minOffer: 0,
      maxOffer: 900,
      currentOffer: 500,
      numberOfBids: 0, // Number of competing bids
    },
    {
      flight: 'FRA → YUL',
      flightDetails: 'Air Canada Flight AC875, 7h 50m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 800,
      currentOffer: 625,
      numberOfBids: 6, // Number of competing bids
    },
    {
      flight: 'DXB → FRA',
      flightDetails: 'LH Flight AC9081',
      upgradeType: 'Not eligible for upgrade',
      minOffer: 0,
      maxOffer: 0,
      currentOffer: 0,
      numberOfBids: 0, // Number of competing bids
    },
    {
      flight: 'LHR → JFK',
      flightDetails: 'British Airways Flight BA117, 7h 55m',
      upgradeType: 'First Class',
      minOffer: 0,
      maxOffer: 1500,
      currentOffer: 900,
      numberOfBids: 64, // Number of competing bids
    },
    {
      flight: 'SYD → LAX',
      flightDetails: 'Qantas Flight QF11, 13h 30m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 2000,
      currentOffer: 1100,
      numberOfBids: 12, // Number of competing bids
    },
    {
      flight: 'HND → BKK',
      flightDetails: 'Japan Airlines Flight JL33, 6h 30m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 500,
      currentOffer: 300,
      numberOfBids: 15, // Number of competing bids
    },
    {
      flight: 'DXB → JNB',
      flightDetails: 'Emirates Flight EK761, 8h 45m',
      upgradeType: 'First Class',
      minOffer: 0,
      maxOffer: 1200,
      currentOffer: 800,
      numberOfBids: 10, // Number of competing bids
    },
    {
      flight: 'SIN → FRA',
      flightDetails: 'Singapore Airlines Flight SQ326, 13h 20m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 1000,
      currentOffer: 650,
      numberOfBids: 2, // Number of competing bids
    },
    {
      flight: 'ICN → SEA',
      flightDetails: 'Korean Air Flight KE19, 10h 30m',
      upgradeType: 'Business Class',
      minOffer: 0,
      maxOffer: 800,
      currentOffer: 500,
      numberOfBids: 3, // Number of competing bids
    },
  ];

  getEnabledRows() {
    return this.offers.filter(
      (offer) => offer.upgradeType !== 'View your offer' && offer.upgradeType !== 'Not eligible for upgrade'
    );
  }

  getDisabledRows() {
    return this.offers.filter(
      (offer) => offer.upgradeType === 'View your offer' || offer.upgradeType === 'Not eligible for upgrade'
    );
  }

  getOfferStrength(offer: any): string {
    const percentage = (offer.currentOffer / offer.maxOffer) * 100;

    if (percentage <= 20) {
      return 'Poor';
    } else if (percentage > 20 && percentage <= 40) {
      return 'Weak';
    } else if (percentage > 40 && percentage <= 60) {
      return 'Neutral';
    } else if (percentage > 60 && percentage <= 80) {
      return 'Strong';
    } else if (percentage > 80) {
      return 'Excellent'; // Replace "Very Strong" with "Excellent"
    }
    return 'No Offer';
  }


  getStrengthClass(strength: string): string {
    const strengthClassMap: { [key: string]: string } = {
      Poor: 'poor',
      Weak: 'weak',
      Neutral: 'neutral',
      Strong: 'strong',
      Excellent: 'excellent'
    };
    return strengthClassMap[strength] || '';
  }

  confirmBid(offer: any) {
    const percentage = Math.floor((offer.currentOffer / offer.maxOffer) * 100); // Calculate the bid percentage

    let feedbackMessage = '';
    if (percentage <= 20) {
      feedbackMessage = `Your bid is ${percentage}% of the maximum offer. It's quite low—consider increasing it to improve your chances!`;
    } else if (percentage > 20 && percentage <= 40) {
      feedbackMessage = `Your bid is ${percentage}% of the maximum offer. It's below average—a slightly higher bid might secure your upgrade.`;
    } else if (percentage > 40 && percentage <= 60) {
      feedbackMessage = `Your bid is ${percentage}% of the maximum offer. It's competitive, but there's room for improvement!`;
    } else if (percentage > 60 && percentage <= 80) {
      feedbackMessage = `Your bid is ${percentage}% of the maximum offer. You're in a strong position—your chances are looking good!`;
    } else if (percentage > 80) {
      feedbackMessage = `Your bid is ${percentage}% of the maximum offer. Fantastic! Your bid is among the highest—sit back and relax!`;
    }

    alert(
      `Bid confirmed for flight: ${offer.flight} with a bid of $${offer.currentOffer} CAD.\n\n${feedbackMessage}`
    );
  }

}
