function Stopwatch() {
    this.stopwatchHandle = stopWatchHandle;
    this.firstValue;
    this.timeOutRef = undefined

    this.start = function(firstValue)
    {
        this.firstValue = firstValue;
        if (this.timeOutRef) {
            clearTimeout(this.timeOutRef)
        }
        this.startStopwatch(this.firstValue);
    };

    this.startStopwatch = function()
    {
        if (this.firstValue < 0) {
            return;
        }
        this.stopwatchHandle.innerHTML = this.firstValue--;

        var self = this

        this.timeOutRef = setTimeout(function()
        {
            self.startStopwatch();
        }, 1000);
    };

    this.stop = function()
    {
        
     
    };

    this.continue = function()
    {

    };
}

window.onload = function() {
    var startBtn = document.getElementById("startBtn");
    var stopBtn = document.getElementById("stopBtn");

    var stopwatchHandle = document.getElementById("stopWatchHandle");

    var stopwatch = new Stopwatch(stopwatchHandle);

    startBtn.onclick = function() {

        var firstValue = document.getElementById("firstValue").value;
        stopwatch.start(firstValue);
    }
}