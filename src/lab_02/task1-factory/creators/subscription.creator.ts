import { SubscriptionType } from '../contracts/subscription-type.enum';
import { ISubscription } from '../contracts/subscription.interface';

export abstract class SubscriptionCreator {
  purchase(type: SubscriptionType): ISubscription {
    this.validate(type);

    const sub = this.createSubscription(type);

    return this.postProcess(sub);
  }

  protected validate(type: SubscriptionType): void {
    if (!type) throw new Error('Subscription type is required');
  }

  protected postProcess(sub: ISubscription): ISubscription {
    return sub;
  }

  protected abstract createSubscription(type: SubscriptionType): ISubscription;
}
