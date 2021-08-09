import { IState } from "../interfaces/ISate";
import { Order } from "../classes/Order";

export class OrderShippedState implements IState {
  order: Order;
  constructor(o: Order) {
    this.order = o;
  }

  shipOrder() {
    return "Vous ne pouvez pas renvoyer votre commande car votre commande est déja envoyer...";
  }

  cancelOrder() {
    return "Commande déja envoyé, impossible d'annuler";
  }

  verifyPayment() {
    return "vérification déja effectuer, envoi de votre colis..";
  }
}
