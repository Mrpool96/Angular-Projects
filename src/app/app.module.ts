import { TicketBookingsComponent } from './ticket-bookings/ticket-bookings.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { HotelReservationDetailsComponent } from './hotel-reservation-details/hotel-reservation-details.component';
import { ExploreMahaComponent } from './explore-maha/explore-maha.component';
import { TemplesComponent } from './temples/temples.component';
import { BeachesComponent } from './beaches/beaches.component';
import { FortsComponent } from './forts/forts.component';
import { HillStationsComponent } from './hill-stations/hill-stations.component';
import { CulturesComponent } from './cultures/cultures.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { ShirdiComponent } from './temples/shirdi/shirdi.component';
import { GanpatipuleComponent } from './temples/ganpatipule/ganpatipule.component';
import { DagdushethComponent } from './temples/dagdusheth/dagdusheth.component';
import { BhimashankarComponent } from './temples/bhimashankar/bhimashankar.component';
import { MoreshwarComponent } from './temples/moreshwar/moreshwar.component';
import { MurudComponent } from './beaches/murud/murud.component';
import { DapoliComponent } from './beaches/dapoli/dapoli.component';
import { TarkarliComponent } from './beaches/tarkarli/tarkarli.component';
import { AlibaghComponent } from './beaches/alibagh/alibagh.component';
import { HarihareshwarComponent } from './beaches/harihareshwar/harihareshwar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    MenuComponent,
    TravelBookingComponent,
    HotelReservationDetailsComponent,
    ExploreMahaComponent,
    TemplesComponent,
    BeachesComponent,
    FortsComponent,
    HillStationsComponent,
    CulturesComponent,
    WildlifeComponent,
    ShirdiComponent,
    GanpatipuleComponent,
    DagdushethComponent,
    BhimashankarComponent,
    MoreshwarComponent,
    MurudComponent,
    DapoliComponent,
    TarkarliComponent,
    AlibaghComponent,
    HarihareshwarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'ticket', component:TicketBookingsComponent},
      {path:'travel-booking',component:TravelBookingComponent},
      {path:'hotel-reservation',component:HotelReservationDetailsComponent},
      {path:'home',component:AppComponent},
      {path:'explore-maha',component:ExploreMahaComponent},
      {path:'temples',component:TemplesComponent},
      {path:'beaches',component:BeachesComponent},
      {path:'hill-stations',component:HillStationsComponent},
      {path:'forts',component:FortsComponent},
      {path:'culture',component:CulturesComponent},
      {path:'wild',component:WildlifeComponent},
      {path:'shirdi',component:ShirdiComponent},
      {path:'bhima',component:BhimashankarComponent},
      {path:'dagdusheth',component:DagdushethComponent},
      {path:'moreshwar',component:MoreshwarComponent},
      {path:'ganpatipule',component:GanpatipuleComponent}
      


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
