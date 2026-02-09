import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FaqComponent } from '../faq/faq.component';
import { FeaturesComponent } from '../features/features.component';
import { HeroComponent } from '../hero/hero.component';
import { PlansComponent } from '../plans/plans.component';
import { SocialComponent } from '../social/social.component';
import { UserReviewsComponent } from '../user-reviews/user-reviews.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, HeroComponent, SocialComponent, FeaturesComponent, UserReviewsComponent, PlansComponent, FaqComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
