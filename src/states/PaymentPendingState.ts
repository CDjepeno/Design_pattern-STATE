import { IState } from "../interfaces/ISate";
import { Order } from "../classes/Order";
export class PaymentPendingState implements IState {
  order: Order;
  constructor(o: Order) {
    this.order = o;
  }

  shipOrder() {
    return "Impossible d'envoyer votre commande paiement en attente";
  }

  cancelOrder() {
    this.order.setState(this.order.cancelledOrderState);
    return "Annulation de votre commande";
  }

  verifyPayment() {
    this.order.setState(this.order.orderBeingPreparedState);
    return "paiement vérifié ! envoi de votre commande";
  }
}
