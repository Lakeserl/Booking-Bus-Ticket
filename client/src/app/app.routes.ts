import { Routes } from '@angular/router';
import { SearchComponent } from './page/search/search.component';
import { SearchResultComponent } from './page/search-result/search-result.component';
import { BookTicketComponent } from './page/book-ticket/book-ticket.component';
import { MyBookingComponent } from './page/my-booking/my-booking.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full"
    },
    {
        path:"search",
        component:SearchComponent
    },
    {
        path:"search-result",
        component:SearchResultComponent
    },
    {
        path:"book-ticket",
        component:BookTicketComponent
    },
        {
        path:"my-booking",
        component:MyBookingComponent
    },
];
