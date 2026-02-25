export interface ISubscription {
  monthlyFee: number;
  minPeriodMonths: number;
  channels: string[];
  describe(): string;
}
