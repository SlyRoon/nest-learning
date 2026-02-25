import { SubscriptionCreator } from './subscription.creator';
import { SubscriptionType } from '../contracts/subscription-type.enum';
import { ISubscription } from '../contracts/subscription.interface';

import { DomesticSubscription } from '../subscriptions/domestic.subscription';
import { EducationalSubscription } from '../subscriptions/educational.subscription';
import { PremiumSubscription } from '../subscriptions/premium.subscription';

export class WebSiteCreator extends SubscriptionCreator {
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

  protected postProcess(sub: ISubscription): ISubscription {
    sub.channels.push('WebBonus');
    return sub;
  }
}
