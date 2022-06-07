<h1 align="center"><img src="react-app/public/static/images/vapor_logo.png" height="30px" width="35px" />Vapor<img src="react-app/public/static/images/vapor_logo.png" height="30px" width="35px" /></h1>

<h5 align="center">  By:  <a href="https://github.com/Jared-Kunhart">Jared Kunhart</a>, <a href="https://github.com/Cmizell186">Christopher Mizell</a>, <a href="https://github.com/JDVien">Jason Vien</a>, <a href="https://github.com/JayDrojas">Damian Drojas</a>, - <a href="https://vaporgamesapp.herokuapp.com/"><i>Live site</i></h5>

### Table of Contents
- [Main purpose](#main)
- [Games](#Games)
- [Reviews](#reviews)
- [Cart](#cart)
- [Conclusion](#conclusion)

## Main
  Vapor is a <a href="https://store.steampowered.com/">Steam</a> Clone. Setting out to create pixel perfect clone with 4 amazing group members using React, Redux,
  Python and SQLAlchemy. When you first visit the site, open up <a href="https://store.steampowered.com/">Steam</a> in another window and compare, you'll lose track
  of which is which. As a user visiting the site, you have several options and one not normally available to regular users - Listing your game as a developer on the
  store. Other options include adding, removing, and checking out with games in your cart. You can also create, update and delete reviews on a game after you purchase
  it, as well as read reviews left by other users. There is many hidden gems, such as setting up your own profile.

#### Key Features
- Games
  As a user you have many options involving games. You can pretend to be a developer and create a store page for your game. You can then update or delete that listing.
  Along with that you can include a video link to your game and upload several pictures along with it. You can also look through and purchase any game and add it to
  your unique library.
  
- Reviews
  Once you own a game, leave your thoughts about it with a review ! Or just read the reviews before you purchase !
  
- Cart

#### Technology used

![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/python.svg)

#### How to use this application
  
  1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/Cmizell186/vapor.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

## Game
  - View a Game.
  Take a look through the store, once you click a game it takes you too the game details page. There you can view any related videos, pictures and reviews.
  
  ![image](https://user-images.githubusercontent.com/89172742/171493276-5a50ca52-e253-40cf-b95e-0ea0af0072d5.png)
  
  - Create a Game.
  In creating a pixel perfect clone, we had to use creative liberties when listing a game on our store. Steam's developer service/storefront is not accessible to
  regular users. Jason Vien, our most talented developer, created a page that borders on perfection. You have several options for listing your game, including a 
  video link.
  
  ![image](https://user-images.githubusercontent.com/89172742/171493799-a76ce3f5-f815-4b40-88e0-27c0b5ff7dcb.png)
  
  - Edit a Game.
  Once you have listed the game, you can update the details you already have or added new ones. In charge of AWS Image services, Chris Mizell did a excellent job of allowing users to upload images to his Amazon Bucket.
  - Delete a Game.
  Don't want your game on the store anymore ? Delete it, but it stays for users who already bought it.
  
![image](https://user-images.githubusercontent.com/89172742/171493883-71339dce-c915-4988-9560-69c6dec4a280.png)

## Reviews
  - View reviews.
  See reviews left by users who have already purchased the game to find out if it's a game you are interested in.
  
  ![image](https://user-images.githubusercontent.com/89172742/171494709-5cf3709e-f67e-42c0-a197-c3f711f8dd32.png)

  - Create reviews.
  Already own the game ? Leave a review for future users who are also interested in the game
  
  ![image](https://user-images.githubusercontent.com/89172742/171494813-af927613-4bfc-41d8-b9c4-8ab940d624fd.png)

  - Edit reviews.
  Update your review if you changed your mind about the game !
  - Delete reviews.
  Or maybe delete the review !
  
  ![image](https://user-images.githubusercontent.com/89172742/171495169-797039d0-a5ba-4724-b376-3f4226c15878.png)
  
## Cart
  - Cart games.
  
  You can view items in cart, as well as see the total amount.
  
  ![image](https://user-images.githubusercontent.com/86801740/171500163-71f8bc7f-2ed2-4e23-b359-470cb2b984d7.png)
  
  - Cart button.
  
  Cart button will show how many items are currently in cart. If cart is empty it wont show any number.
  
  ![image](https://user-images.githubusercontent.com/86801740/171500355-609c3c47-77ef-4600-a8b6-dea2cf3c7940.png)
  
  - Remove from cart.
  
  Remove button removes item from cart.
  
  ![image](https://user-images.githubusercontent.com/86801740/171500561-69fa7d79-3f0e-4ee7-ba98-7923c9fdbf4e.png)

  - Purchase cart.
  
  Purchased button sets all cart items to owned to be displayed in library. It also removes them from cart and shows a thank you message.  
  
  ![image](https://user-images.githubusercontent.com/86801740/171500787-b04f75e1-6ec3-472c-8c1c-9533c1898c98.png)
  ![image](https://user-images.githubusercontent.com/86801740/171500847-7e5e62f6-ff07-4c78-a429-a243db0d1353.png)

## Conclusion
  Vapor was a culmination of excellent group chemistry and hard work. What was achieved in only a week is something we are all very happy with.
