# pageload.js

![npm](https://img.shields.io/npm/v/pageload.js)
![GitHub file size in bytes](https://img.shields.io/github/size/manzdev/pageload.js/lib/pageload.min.js)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/pageload.js)

Small vanilla javascript library 3.5KB (~1.4KB gzipped) for easy and simple page loading spinner.
Ready for ES Modules. Agnostic. **Zero dependencies**.

## Basic Usage

### 1. Vía NPM

```bash
npm install pageload.js
```

```js
import PageLoad from "pageload.js";
PageLoad.start({ fakeMode: true });
```

### 2. Vía CDN

```html
<script type="module">
  import PageLoad from "//unpkg.com/pageload.js";
  PageLoad.start({ fakeMode: true });
</script>
```

- `fakeMode` mode run a slow progress bar

## Custom Usage

### FadeIn until completed

```js
import PageLoad from "//unpkg.com/pageload.js";
PageLoad.start({
  autoIncrement: true,
  color: "mediumpurple",
  fadeIn: true
});
```

### Progress bar on dark mode

```js
import PageLoad from "//unpkg.com/pageload.js";
document.body.style.backgroundColor = "black";
PageLoad.start({
  fakeMode: true,
  backgroundColor: "#222",
  color: "#c00",
  spinBarColor: "#ccc",
  enableProgress: true
});
```

More info about [pageload.js](https://manzdev.github.io/pageload.js) and [options](https://manzdev.github.io/pageload.js/#options).
