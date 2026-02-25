import { Injectable, OnModuleInit } from '@nestjs/common';
import { SubscriptionType } from '../contracts/subscription-type.enum';

import { WebSiteCreator } from '../creators/website.creator';
import { MobileAppCreator } from '../creators/mobileapp.creator';
import { ManagerCallCreator } from '../creators/managercall.creator';

@Injectable()
export class FactoryDemoService implements OnModuleInit {
  onModuleInit() {
    this.run();
  }

  run() {
    const web = new WebSiteCreator();
    const mobile = new MobileAppCreator();
    const manager = new ManagerCallCreator();

    const webDomestic = web.purchase(SubscriptionType.Domestic).describe();
    const managerDomestic = manager
      .purchase(SubscriptionType.Domestic)
      .describe();

    let mobilePremium: string;
    try {
      mobilePremium = mobile.purchase(SubscriptionType.Premium).describe();
    } catch (e: unknown) {
      mobilePremium = e instanceof Error ? e.message : String(e);
    }

    console.log('WEB Domestic:', webDomestic);
    console.log('MANAGER Domestic:', managerDomestic);
    console.log('MOBILE Premium:', mobilePremium);

    return { webDomestic, managerDomestic, mobilePremium };
  }
}
