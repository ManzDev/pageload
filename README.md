# PageLoad.js

![npm](https://img.shields.io/npm/v/@manz/pageload)
![GitHub file size in bytes](https://img.shields.io/github/size/manzdev/pageload/lib/pageload.min.js)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@manz/pageload)

Small vanilla javascript library 3.5KB (~1.4KB gzipped) for easy and simple page loading spinner.
Ready for ES Modules. Agnostic. **Zero dependencies**.

## Basic Usage

### 1. Vía NPM

```bash
npm install @manz/pageload
```

```js
import PageLoad from "@manz/pageload";
PageLoad.start({ fakeMode: true });
```

### 2. Vía CDN

```html
<script type="module">
  import PageLoad from "//unpkg.com/@manz/pageload";
  PageLoad.start({ fakeMode: true });
</script>
```

- `fakeMode` mode run a slow progress bar

## Custom Usage

### FadeIn until completed

```js
import PageLoad from "//unpkg.com/@manz/pageload";
PageLoad.start({
  autoIncrement: true,
  color: "mediumpurple",
  fadeIn: true
});
```

### Progress bar on dark mode

```js
import PageLoad from "//unpkg.com/@manz/pageload";
document.body.style.backgroundColor = "black";
PageLoad.start({
  fakeMode: true,
  backgroundColor: "#222",
  color: "#c00",
  spinBarColor: "#ccc",
  enableProgress: true
});
```

More info about [pageload](https://manzdev.github.io/pageload) and [options](https://manzdev.github.io/pageload/#options).
