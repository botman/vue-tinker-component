# BotMan Vue Tinker component

This repository has the code that is used in the BotMan Studio tinker page.

Usage in your own application:

```
npm install botman-tinker
```

or

```
yarn add botman-tinker
```

Load the component:
```js
import {TinkerComponent} from 'botman-tinker';
Vue.component('botman-tinker', TinkerComponent);
```

Add it to your html:
```html
<botman-tinker api-endpoint="/botman" user-id="my-custom-user-id"></botman-tinker>
```
