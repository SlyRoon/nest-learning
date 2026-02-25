import { ISubscription } from '../contracts/subscription.interface';

export class DomesticSubscription implements ISubscription {
  monthlyFee: number = 100;
  minPeriodMonths: number = 6;
  channels: string[] = ['TV1', 'TV2', 'TV3'];

  describe(): string {
    return `fee=${this.monthlyFee}, min=${this.minPeriodMonths}, channels=${this.channels.join(', ')}`;
  }
}
