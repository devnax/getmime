## Get file mime type and extention
lightweight js library to read file mime type and extention

## Usages
```js
import {getType, getExtention} from 'getmime'

getType('jpg') // image/jpeg
getType('js') // application/javascript

getExtention('image/jpeg') // jpg
getExtention('application/javascript') // js

```