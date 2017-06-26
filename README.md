# 🔥 Purple Bricks Front-end Test 🔥

## Test Goals 🥅

- Built in ReactJS (create-react-app)
    - ES6 Goodness
    - Smart/Dumb component approach
- Semantic tags
- Uses SASS (bourbon/neat) not styled components with ReactJS
- Collapsable Container
- Property values are formatted from an integer value
- Property value in the negotiation section input formats as typing and validates
    - (try typing 0, then hitting submit, then typing again)
- Images have been sprited
    - Although personally I feel this is failr old hat now and SVG /w some polyfills is a far better approach.
- Tested in IE 9/10+

## Getting Started

Built with node >= 8.0.0

(not tested below but should be fine, I thought yarn was fast but man 🔥 Node 8/NPM 5 🔥 )

To spin up a local server and view the project do the following: 👉🏻

```
cd ~/project-root/
yarn
yarn start

# Alternatively to view compiled
yarn build
```

## Few points 👆🏻

This is a traditional react app in the sense that state/props are passed down
to child components, ideally this would be better put into react-redux
to manage application state using stores/reducers/actions.

There is one Container/(Higher order Component) where all the app logic is managed,
Methods/state/props move up and down the chain through this file but state is only managed
here instead of lower down in child components.

A react component handles the validation of the form field and permits only numbers
as well as separating the integer into a more applicable format.

The form also presents an error if the value submitted is zero. This value
is then also removed when the user starts typing valid numbers or presses submit
on a valid number.