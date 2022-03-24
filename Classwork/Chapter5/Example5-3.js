var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
console.log("There are " + maleDancers.count() +
" male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
console.log("There are " + femaleDancers.count() +
" female dancers waiting to dance.");
}

function distribute(nums, queues, n, digit) { // digit represents either the 1s
    // or 10s place
    for (var i = 0; i < n; ++i) {
    if (digit == 1) {
    queues[nums[i]%10].enqueue(nums[i]);
    }
    else {
    queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
    }
    }

    function collect(queues, nums) {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
        nums[i++] = queues[digit].dequeue();
        }
        }
        }