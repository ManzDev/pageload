| Options           | Default value             | Description                          |
| ----------------- | ------------------------- | ------------------------------------ |
| `value`           | `0` (Integer)             | Initial progress value.              |
| `height`          | `5` (Integer)             | Size of loading bar.                 |
| `autoIncrement`   | `true` (Boolean)          | Automatic mode (page load progress). |
| `fakeMode`        | `false` (Boolean)         | Random increment progress.           |
| `fadeIn`          | `true` (String)           | Switch off screen until loaded.      |
| `incrementValue`  | `1` (Integer)             | Increment `1%` every step.           |
| `incrementDelay`  | `100` (Integer)           | Increment step every `100ms`         |
| `transitionDelay` | `500` (Integer)           | `100ms + 500ms` transition delay.    |
| `transitionType`  | `ease` (String)           | CSS transition speed type.           |
| `endDelay`        | `250` (Integer)           | Wait `200ms` before ends progress.   |
| `removeDelay`     | `2000` (Integer)          | Wait `2s` before autodestroy.        |
| `loadingBarClass` | `loading-bar` (String)    | Custom classname for progress bar.   |
| `backgroundColor` | `#ddd` (String)           | CSS color for empty bar.             |
| `color`           | `#0ff` (String)           | CSS color for completed bar.         |
| `enableShadow`    | `false` (Boolean)         | Enable shadow for completed bar.     |
| `shadowOptions`   | `0 -8px 8px 5px` (String) | Options, if shadow is enabled.       |
| `spinBar`         | `true` (Boolean)          | Enable loading spinner.              |
| `spinBarColor`    | `#18a` (String)           | Set color for loading spinner.       |
| `enableProgress`  | `false` (String)          | Set progress text for spinner.       |
| `onStart`         | `() => {}` (Function)     | Hook for start progress bar.         |
| `onDOMLoaded`     | `() => {}` (Function)     | Hook for HTML (DOM) loaded.          |
| `onEnd`           | `() => {}` (Function)     | Hook for end progress bar.           |
