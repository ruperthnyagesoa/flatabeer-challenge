# FlataBeer

Today you'll be building an app for viewing and editing beers. You will be using
a local API and building out the frontend for our app, FlataBeer.

## Demo

Use this gif as an example of how the app should work.

![demo gif](https://github.com/Davincii254/Flatabeer/blob/4d0fa4b71ca0d61f7f5228ef61020d45c48616a2/assets/demo.gif)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/beers](http://localhost:3000/beers)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Deliverables

As a user, I can:

1. See the first beer's details, including its **name, image, description, and
   reviews**, when the page loads. You will need to make a GET request to the
   following endpoint to retrieve the beer data, along with its associated
   reviews:

   ```txt
   GET /beers/1

   Example Response:
   {
      "id": 1,
      "name": "Oh So Flattening",
      "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
      "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
      "reviews": [
        "It's flat! Just the way I like it!!",
        "Is this the real beer, is this just fantasy?",
        "I've always hated bubbles going up my nose, so this is absolutely delightful.",
        "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!"
      ]
    }
   ```

2. See a menu of all beers in the `<nav>` element on the left side of the page
   when the page loads. You will need to make a GET request to the following
   endpoint to retrieve the beer data:

   ```txt
   GET /beers

   Example response:
   [
      {
        "id": 1,
        "name": "Oh So Flattening",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
        "reviews": [
          "It's flat! Just the way I like it!!",
          "Is this the real beer, is this just fantasy?",
          "I've always hated bubbles going up my nose, so this is absolutely delightful.",
          "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!"
        ]
      },
      {
        "id": 2,
        "name": "Pilsen Lager",
        "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
        "image_url": "https://images.punkapi.com/v2/4.png",
        "reviews": [
          "Spicy crab cakes, say what?!",
          "My mum hates it"
        ]
      }
   ]
   ```

3. Add a new review to the page when the review form is submitted. **No
   persistence is needed**.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

1. Remove a review from the page when it is clicked. (Note: no persistence is
   needed; it's fine if the review shows up again when the page is refreshed)

2. Click a beer in the `<nav>` element on the left side of the page and have
   that beer's details displayed in the main section of the page, replacing the
   beer that is currently being displayed. Note that you may have to make an
   additional GET request to access the beer's details.

## Extra Bonus

These extra bonus deliverables involve using `fetch` to update data on the
`json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are
meant for an extra, extra challenge and won't affect your grade. **Make sure to
commit your work to save your progress before attempting the extra bonus
deliverables!**

1. When the review form is submitted, the review should be saved on the server
   in addition to being displayed in the list of reviews. You will need to make
   a request that follows this structure. Note that the body must contain an
   array of **all** reviews for the beer, including your newly added review.

   ```txt
   PATCH /beers/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "reviews": [
        "old review",
        "new review"
      ]
   }
   ----

   Example response:
    {
      "id": 1,
      "name": "Oh So Flattening",
      "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
      "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
      "reviews": [
        "old review",
        "new review"
      ]
    }
   ```

2. When the description form is submitted, the beer's description should be
   updated on the server in addition to being updated on the page. You will need
   to make a request that follows this structure:

   ```txt
   PATCH /beers/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "description": "new description"
   }
   ----

   Example response:
    {
      "id": 1,
      "name": "Oh So Flattening",
      "description": "new description",
      "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
      "reviews": [
        "old review",
        "new review"
      ]
    }
   ```
