import { IState } from "../interfaces/ISate";
import { CancelledOrderState } from "../states/CancelledOrderState";
import { OrderBeingPreparedState } from "../states/OrderBeingPreparedState";
import { PaymentPendingState } from "../states/PaymentPendingState";
import { OrderShippedState } from "../states/OrderShipState";

export class Order {
  cancelledOrderState: IState;
  paymentPendingState: IState;
  orderBeingPreparedState: IState;
  orderShippedState: IState;
  currentState: IState;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.orderBeingPreparedState = new OrderBeingPreparedState(this);
    this.currentState = new OrderBeingPreparedState(this);
  }

  getState() {
    return this.currentState;
  }

  setState(s: IState) {
    this.currentState = s;
  }
}
