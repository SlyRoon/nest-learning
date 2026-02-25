import { ISubscription } from '../contracts/subscription.interface';

export class EducationalSubscription implements ISubscription {
  monthlyFee: number = 200;
  minPeriodMonths: number = 20;
  channels: string[] = ['TV1', 'TV2', 'TV3', 'Discovery', 'Sport'];

  describe(): string {
    return `fre=${this.monthlyFee}, min=${this.minPeriodMonths}, channels=${this.channels.join(', ')}`;
  }
}
