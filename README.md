# Punk Ale's Challenge

## A - Running the UI
&nbsp;  
You can either run app in the dev or the production build preview.  
### ***Running the dev environment ( localhost:5173 )***
```
$npm run dev
```
Note: don't use this for the lighthouse report as build not optimised.  

### ***Running production build preview ( localhost:4173 )***
```
$npm run build
$npm run preview
```
Note: Use this for the lighthouse report as the build is optimised.  
&nbsp;  

## B - Using the App
&nbsp;  
When the app is loaded, you can click on the 'Prev' or 'Next' button to retrieve a page of beers from the punk API. Each page has a maximum number of 15 beers.  
For each beer shown its name, malt ingredients, abv and volume are returned.
&nbsp; 

## C - Testing
&nbsp;  
You will need to install the chromium headless browser for the playright test to work this can be done with:-
```
$npx playwright install
```

To test just spin up dev environment on port 5173 do:-
```
$npm run dev
```

You can now either run individual test, as per the scripts in the package file or all test together (in a new terminal) :-


Individual tests:-  
ie testing the api  
```
$npm run tests:api
```

Run all tests:-
``` 
$npx playwright test
```

The results are visible in the terminal window.