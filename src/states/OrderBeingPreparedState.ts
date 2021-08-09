import { IState } from "../interfaces/ISate";
import { Order } from "../classes/Order";

export class OrderBeingPreparedState implements IState {
  order: Order;
  constructor(o: Order) {
    this.order = o;
  }

  shipOrder() {
    this.order.setState(this.order.orderShippedState);
    return "Commande envoyer...";
  }

  cancelOrder() {
    this.order.setState(this.order.cancelledOrderState);
    return "Commande déja envoyé, impossible d'annuler";
  }

  verifyPayment() {
    return "vérification déja effectuer, envoi de votre colis..";
  }
}
