/* 
TempTracker class for tracking temperatures and returning temperatures provided.
Temperature range set on initialization of TempTracker class.  
____________________________________________________________________________________

Example:

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


____________________________________________________________________________________

Output:
------------- | -----
track.getMean |  45
track.getMax  |  115
track.getMin  |  -40

**********************/

class TempTracker {
    constructor(maxTemp, minTemp) {
        this.maxTemp = Math.floor(maxTemp);
        this.minTemp = Math.floor(minTemp);
        this.max = 0;
        this.min = 0;
        this.combined = 0;
        this.mean = 0;
        this.count = 0;
    }

    set insert(temp) {
        try {
            if (!this.maxTemp || !this.minTemp) {
                throw 'Missing constructor values'
            }
    
            temp = Math.floor(temp)

            if (temp < this.minTemp) {
                temp = this.minTemp
            } else if (temp > this.maxTemp) {
                temp = this.maxTemp
            }
    
            if (!this.min || this.min > temp) {
                this.min = temp
            }
            if (!this.max || this.max < temp) {
                this.max = temp
            }
            
            this.combined += temp
            this.count++            
            this.mean = Math.floor((this.combined / this.count))
        } catch(e) {
            console.log(e)
        }        
    }

    get getMax() {
        return this.max
    }

    get getMin() {
        return this.min
    }
    
    get getMean() {
        return this.mean
    }
}