<h2>Languages and Tools</h2>

-CSS
-React
-TailwindCSS
-Typescript

[Live demo link](https://firebnb.vercel.app/)

<h2>What I added to improve functionality:</h2>

This project served some simple purposes, push me to think like a developer, problem solve like a developer and get the main functionality as close as possible to airbnbs without utilizing a backend.

<h2>What functionalities did I achieve?</h2>

Homepage/Search page
- [x]  Location select, calendar and guests;
- [x]  Navigation from the navbar to the search-page ;
- [x]  Filters(price, amenities,allows pets, children, house type) ;
- [x]  Filters by type of location;
- [x]  Dynamic navbar;
- [x]  Full mobile friendly and responsive;
- [x]  Dynamic price by date and guests;
- [x]  Favorite your favourite listings;
- [x]  Great score in Accessibility >85 in both Lighthouseand PageSpeed Insights.


Map:
- [x]  Mapbox API;
- [x]  Shows the matches on the map;
- [x]  Map marker;
- [x]  Link to the listing detail;
- [x]  Pop-up is not responsive.

Listing:

- [x]  Dynamic listing data;
- [x]  Image grid;
- [x]  conditional rendering for super host, rare finds...
- [x]  Min number of guests on the availability menu;
- [x]  Min number of stay time on the availability menu.


<h2>My biggest difficulties and how I overcame them</h2>

- [x]  CSSSSSSSSS and Tailwind CSS were a pain in the behind here because the website is so complex with such fine details, I broke my app constantly, but I got it done with a lot of try and error and documentation, so I have a love and hate relationship with these tools;
- [x] Utilizing react-router was pretty challenging, as I wanted to keep the functionality only frontend, I had to utilize a lot of conditional rendering techniques to render the data on the pages and the navbar, and prevent as much as I could prop drilling, and I got it pretty close to airbnbs;
- [x] the filters for things like amenities and price took me the longest to solve, because the same methods I used for the search page didn't work, my variables to track the URL parameters were all giving me true but the filters were never being passed, so I had to get pretty creative and separate my filters, one for the type of location and one for the rest of the filters, now they acted independently and started to work as intended, such as a simple solution that took me weeks of documentation.

<h2>What I'm working on now:</h2>

- [x] Improving the performance, utilizing techniques like debouncing/throttling to prevent excessive Mapbox api calls ;
- [x] Modal close on outside click;
- [x] Lazy loading for images/components optimization like airbnb utilizes.
