# Tech Challenge for Horizon

## Deploy: https://hrzon-challenge.onrender.com

## Routes
 - Create surfer: 
    - `POST` request to `/surfers`
    - Body:
       - `number`: integer, required
       - `country`: string, required
       - `name`: string, required
 - Delete surfer:
   - `DELETE` request to `/surfers/{surfer number}`
   - Will also delete every battery, wave and grade the surfer is related to
- Edit surfer name or country:
   - `PUT` request to `/surfers`
   - Body:
       - `number`: integer, required
       - `country`: string, optional
       - `name`: string, optional
 - Get all surfers, and all surfers by country:
   - `GET` request to `/surfers?country={country filter}`
   - Returns a list of all registered surfers of informed country
   - If no country is informed, returns a list of all registered surfers
 - Create battery:
   - `POST` request to `/batteries`
   - Body:
     - `surferOne`: number of surfer, integer, required
     - `surferTwo`: number of surfer, integer, required
   - Returns JSON with the created battery ID and the informed surfers numbers
 - Create wave:
   - `POST` request to `/waves`
   - Body:
      - `battery`: battery ID, integer, required
      - `surfer`: surfer number, integer, required
   - Returns JSON with the created wave ID and the informed surfer number and battery ID
 - Create grade:
   - `POST` request to `/grades`
   - Body:
     - `wave`: wave ID, integer, required
     - `parcial_one`: integer, range from 0 to 100, required
     - `parcial_two`: integer, range from 0 to 100, required
     - `parcial_three`: integer, range from 0 to 100, required
 - Get winner of a battery:
   - `GET` request to `/battery/winner/{battery id}`
   - Returns JSON with the battery ID, and the name of the winner
   - If there is a tie, the winner will say "tie"