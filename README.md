# TempTracker
TempTracker class for tracking temperatures and returning temperatures provided.

Temperature range set on initialization of TempTracker class.

Example
---
```
let track = new TempTracker(120, -40);
let tempArr = [104,98,-5,-2,115,-200]
tempArr.map((item,idx) => {
    track.insert = item
})
console.log('------------- | -----')
console.log('track.getMean | ', track.getMean)
console.log('track.getMax  | ', track.getMax)
console.log('track.getMin  | ', track.getMin)
console.log('')
```

Output
---
```
------------- | -----
track.getMean |  45
track.getMax  |  115
track.getMin  |  -40
```
