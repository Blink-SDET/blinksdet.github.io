## LS2Request pattern

A sample Enact application that shows off how to derive a computed value from multiple LS2Request calls

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can access it from a webOS device. To create an installable application, use `npm run pack` and then use the packaging tools to package the **dist** folder.

### Enact Components Used
- `webos/LS2Request`

A component may require multiple LS2Request return values. In this sample, we show how to manage multiple LS2Request returns in the Redux store, and show how to use selectors to compute derived data.

When you run this sample on TV, you may observe multiple pieces of information (e.g. foreground app ID, TV system name, country group, authentication, etc.) that display after clicking the button. Each piece of information is gathered from different service calls, and needs to be computed for display in a desirable string format. But should we perform this computation each time the store gets updated? We don't want the computation to happen when state changes are not directly related to the components.

To address the above concern, we introduce the [Reselect](https://github.com/reactjs/reselect) library, which facilitates the creation of memoized, composable selector functions. Reselect selectors allow us to efficiently compute derived data from the Redux store. See the following example for selecting a complex value computed from two pieces of data.

```javascript
const getComplexValue = createSelector(
	[getFirstData, getSecondData],
	(firstData, secondData) => {
		// do complex logic to select value
		return firstData + secondData;
	}
);
```

### Note
In this sample, we deliberately chose the service calls that return a flat JSON object to simplify our reducer logic. If you are dealing with deeply nested JSON data such as `com.webos.settingsservice/getSystemSettings`, it is recommended that you [normalize your state shape](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html), so that we can shallow compare in the `mapStatesToProps` or `createSelector` functions.

### See also
- [Computing Derived Data](http://redux.js.org/docs/recipes/ComputingDerivedData.html)
- [Reselect](https://github.com/reactjs/reselect)

---

This project was bootstrapped with [enact-dev](https://github.com/enyojs/enact-dev).
