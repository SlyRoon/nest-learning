import { SubscriptionType } from '../contracts/subscription-type.enum';
import { ISubscription } from '../contracts/subscription.interface';
import { DomesticSubscription } from '../subscriptions/domestic.subscription';
import { EducationalSubscription } from '../subscriptions/educational.subscription';
import { PremiumSubscription } from '../subscriptions/premium.subscription';
import { SubscriptionCreator } from './subscription.creator';

export class ManagerCallCreator extends SubscriptionCreator {
  protected createSubscription(type: SubscriptionType): ISubscription {
    switch (type) {
      case SubscriptionType.Domestic:
        return new DomesticSubscription();
      case SubscriptionType.Educational:
        return new EducationalSubscription();
      case SubscriptionType.Premium:
        return new PremiumSubscription();
      default:
        throw new Error('Unsupported type');
    }
  }
}
