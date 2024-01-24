# Work of Parcel (Bundler)
- Dev Build
- Give Local Server
- HMR = Hot Module Repalcement(automatically refresh page ) -- Parcel did this using File Watching Algorithm which is written in C++
- Give Faster Build because it is using cashing
- Also Do image Optimisation
- Do Minification of file
- Bundle of file
- Compress your file
- Consistent Hashing
- Code Splitting
- Differential Bundling -- to support older version also
- Diagnostic
- Error Handling
- To host your app on HTTPS
- Tree Shaking -- remove unused code for you
- Different dev and prod bundles beacause prod build take little morre time

# Problems faced
- swiggy api two diffrent api structure for restaurant menu 
- working with live api is hard

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector


# Setting up Testing in our APP
- Install React Testing Library
- Install JEST
- Install Babel depedencies
- Config Babel
- Config Parcel config file to disable babel transpilation
- Jest Config npx jest --init
- Install JSDOM library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom - npm i -D @testing-library/jest-dom
 