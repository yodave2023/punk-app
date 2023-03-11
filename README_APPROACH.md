# Beer UI - My approach

This is my approach to the technical challenge, the aim is to assist anyone reviewing understand the why,how and what decisions I made.

## A - Pre-Code work

1.  ***README activity***
    1. quickly scanned the README
    2. read the README in detail
    3. read the README in reverse  
&nbsp;  
2.  ***Full understanding of the requirements and notes made as follows:-***  
    1. Simple/Slim FE (for me: don't complicate it and don't go package crazy) 
    2. Can be done in any language (for me: keep it simple do in JS)
    3. Demonstrate good dev practice (for me: logical clean code & testing & accessibility)
    4. Can use any framework (for me: investigate alternative to the bloated CRA)
    5. Deliver something of quality
    6. Should take around 2hrs
    7. Extras are search component and clickable more info card  
&nbsp;  
3.  ***Investigate the punkapi*** 
    1. Seems nice enough, returns a jason array of beer objects
    2. No meta data, ie no page number / total pages or total beers
    3. Beers have an id number which is sequential starting at 1
    4. Cannot get all the beers at once, the default is 25 and the max is 80 per request
    5. The total number of beers is 325 which at 15 per page would be approx 22 pages
    6. If go beyond the 325 via a higher page number a blank array is returned
    7. If you do try and return a beer with id of 326 you get a 404 not found message
    8. Extra is implementing a search component based on the beer name, the api supports this
    9. The api has a rate limit, shouldn't effect us as its 3600 requests per hour
&nbsp;  
## B - Plan of Action

- Will use JS as its a small react project, only a few components, no need to TS.
- For react framework, going to use Vite as its small and only around 86 packages compared to CRA which has over 1400 packages.
- As it's a small project, going to do E2E testing playwright, it seems a good testing framework and permits different browser testing & API tests, also never used it so good opportunity.
- Again with the keep it small/lightweight mentality, will use the built in fetch method for the request instead of axios but will validate the call was successful.
- As hitting an api will include a loading spinner.
- As keeping it simple, won't be using say Material UI, so will use semantic HTML & use lighthouse to check accessibility score.
- Think it's going to be tight in terms of time and what I want to do, so from the onset treating the extras as a nice to have if time permits.

## C - Review / lessons learned

- Vite & Playwright are amazing will be using them a lot more going forward. 
- Added a simple favicon as didn't like the default.
- Lighthouse flagged a couple of issues, looks the default vite build doesn't have all the required meta detail for SEO, also my original colour choice didn't provide enough contrast so changed them for greater accessibility.
