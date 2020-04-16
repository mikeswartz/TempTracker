/**
 * Initialize the class with a temperature range using maxTemp and minTemp.
 *
 * Use the setter `insert` to set the current temp integer value
 *
 * Use the getters `getMax` or `getMin` or `getMean` to retrieve 
 * their respective integer values
 *
 * @param  maxTemp the integer for the max allowed temperature
 * @param  minTemp the integer for the minimum allowed temperature
 */

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
