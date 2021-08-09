import { IState } from "../interfaces/ISate";
import { Order } from "../classes/Order";

export class CancelledOrderState implements IState {
  order: Order;
  constructor(o: Order) {
    this.order = o;
  }

  shipOrder() {
    return "Vous ne pouvez pas envoyer votre commande, commande annulé";
  }

  cancelOrder() {
    return "Commande déja envoyé, impossible d'annuler";
  }

  verifyPayment() {
    return "Commande annulé, vous ne pouvez pas vérifier votre paiement";
  }
}
