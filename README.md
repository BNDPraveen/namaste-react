# Namaste React - Episode 5

Welcome to the fifth episode of my React learning journey! In this episode, I delved into several advanced concepts and best practices, building on the foundation laid in previous episodes.

## Running the Food Delivery App

To experience the food ordering app, follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/BNDPraveen/namaste-react.git

   ```

2. Navigate to the project directory:

   ```bash
   cd namaste-react

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Start the Project::

   ```bash
   npx start

   ```

5. Open your browser:
   Open your browser and go to http:localhost:1234 to view the React app.

## New Learnings

### 1. File Structuring and Component Naming

Learned about effective file structuring by breaking down App.js into smaller files, naming them exactly like the component, and storing all the React code in the src folder. Emphasized the importance of named and default imports and exports for better organization and maintainability.

## 2. Using useState React Hook

In the `Body.js` file, the `useState` React Hook is utilized to manage the state of the restaurant list, enabling dynamic updates and rendering in response to user interactions. Here's a breakdown of its usage:

- **State Initialization:**

  - The state variable, `listOfRestaurant`, is declared using the `useState` Hook and initialized with data from `mockdata.js`.

- **State Update:**

  - The `setListOfRestaurant` function, provided by the `useState` Hook, is employed to update the state. This allows for seamless modification of the restaurant list based on various triggers.

- **User Interaction Example:**

  - In the provided example, clicking the "Top Rated Restaurants" button triggers a filter function. This function filters the restaurant list based on a specified condition (e.g., restaurants with an average rating > 4), and then updates the state using `setListOfRestaurant`.

- **Dynamic Rendering:**
  - The updated state is utilized to dynamically render the filtered restaurant list, providing an interactive and responsive user experience.

This use of the `useState` Hook exemplifies its role in managing local component state, enabling React components to efficiently respond to changes and deliver a more engaging user interface.

### 3. Building a Food Ordering App

Applied the accumulated knowledge to build a food ordering app. Practiced the integration of React concepts, ensuring a smooth and interactive user experience.
