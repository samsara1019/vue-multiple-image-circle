# vue-multiple-image-circle

## Project setup
```
npm i vue-multiple-image-circle
```

or

```
yarn add vue-multiple-image-circle
```



### in individual components
```js
import { MultipleImageCircle } from "vue-multiple-image-circle";
import "vue-multiple-image-circle/dist/mic.css";


export default {
 components: {
    "image-circle": MultipleImageCircle
  },
  data() {
      return {
          profileImages: [] //image url string's array
      }
  }
}
```


```html
<image-circle :imageUrls="profileImages" />
```

### custom circle size
```html
<image-circle :imageUrls="profileImages" :customWidth="20" />
```


### example

![](./src/assets/images/one.png?display=inline-block)
![](./src/assets/images/two.png?display=inline-block)
![](./src/assets/images/three.png?display=inline-block)
![](./src/assets/images/four.png?display=inline-block)



---
## Contribution
Feel free to contribute!