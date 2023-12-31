# Namaste React - Episode 7

After delving into the seventh video of the React course, I'm excited to share my newfound knowledge about integrating React Router Dom into our Food Ordering App. This essential library adds a layer of sophistication to our application, handling navigation and routing seamlessly. Here are the key takeaways:

## React Router Dom

React Router Dom emerged as a pivotal tool for managing navigation and routing in our React application. It allows us to effortlessly define the structure of our app, control URLs, and dynamically render components based on the current route.

### 1. Route Configuration
Understanding the route configuration was crucial. Two notable aspects were highlighted:

- **createBrowserRouter:**
  
      - The `createBrowserRouter` function proved instrumental in adopting the HTML5 history API. This not only ensures cleaner URLs but also contributes to a more user-friendly experience.

- **RouterProvider:**
  
      - The `RouterProvider` component became the bridge for making router context available throughout our component tree. This step is foundational for enabling components to interact with the router.

### 2. Children Routes & Outlet
The concept of children routes and the `Outlet` component was a game-changer in terms of structuring our app's navigation. By nesting routes and utilizing the Outlet, we achieved a modular and organized approach to handling different sections of our Food Ordering App.

### 3. useRouteError() Hook
The `useRouteError()` hook was introduced as a mechanism for gracefully managing route errors, especially 404 scenarios. This hook allows us to customize error handling based on the specifics of our route configuration.

### 4. Link Component
The `Link component` simplifies the process of creating hyperlinks between routes. It's a declarative and straightforward way to handle navigation within our app.

### 5. useParams Hook

The `useParams` hook is a handy tool provided by React Router Dom for accessing parameters from the current route. This allows us to dynamically adjust the content based on the specific route parameters, such as extracting information about a selected menu item.

### 6. Dynamic Routing
Dynamic routing opened up a world of possibilities. By incorporating route parameters into our paths, we now have the flexibility to create dynamic, data-driven navigation experiences. This is particularly valuable when dealing with variable content like menu items.


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
