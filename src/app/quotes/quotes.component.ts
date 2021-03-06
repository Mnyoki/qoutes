import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Daily Quotes!';
  quotes:Quote[] = [
    new Quote (1,'Henry','Success','What you get by achieving your goals is not as important as what you become by achieving your goals.','Zig Zigler', new Date(2021,2,14),0,0),
    new Quote (2,'Nimmoh','Life','It is possible to name everything and to destroy the world.','Kathy Acker',new Date(2021,4,11),0,0),
    new Quote (3,'Mike','Control','...a name is almost always a sort of cowardice---an attempt to confine a thing to being only what it is, rather than what it may be.','Jesse Ball',new Date(2021,4,16),0,0),
    new Quote (4,'Ess','Computers','The spread of computers and the Internet will put jobs in two categories. People who tell computers what to do, and people who are told by computers what to do.','Marc Andreesen',new Date(2021,4,25),0,0),
    new Quote (5,'Sam','Anger','Resentment and anger are bad for your blood pressure and your digestion.','Desmond Tutu',new Date(2021,4,28),0,0),
    new Quote (6,'Alfred','Egoism','The only tyrant I accept in this world is the still voice within.','Mahatma Gandhi',new Date(2021,5,16),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
