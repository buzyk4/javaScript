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
        clearTimeout(this.timeOutRef)
    };

    this.continue = function()
    {
        this.startStopwatch()
    };

    this.freezeFrame = function() {
        var listItem = '<li>' + this.firstValue + '</li>';
        this.stopwatchHandle.innerHTML += listItem;
        
    };

}

window.onload = function() {
    var startBtn = document.getElementById("startBtn");
    var stopBtn = document.getElementById("stopBtn");
    var continueBtn = document.getElementById("continueBtn");
    var freezeBtn = document.getElementById("freezeBtn");

    var stopwatchHandle = document.getElementById("stopWatchHandle");

    var stopwatch = new Stopwatch(stopwatchHandle);

    startBtn.onclick = function() {

        var firstValue = document.getElementById("firstValue").value;
        stopwatch.start(firstValue);
    }

    stopBtn.onclick = function() {
        stopwatch.stop()
    }

    continueBtn.onclick = function() {
        stopwatch.continue()
    }

    freezeBtn.onclick = function() {
        stopwatch.freezeFrame()
    }
}