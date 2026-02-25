import { ISubscription } from '../contracts/subscription.interface';

export class PremiumSubscription implements ISubscription {
  monthlyFee: number = 30;
  minPeriodMonths: number = 400;
  channels: string[] = ['TV1', 'TV2', 'TV3', 'Discovery', 'Sport', 'Films'];
  describe(): string {
    return `fee=${this.monthlyFee}, min=${this.minPeriodMonths} ,channels=${this.channels.join(', ')}`;
  }
}
