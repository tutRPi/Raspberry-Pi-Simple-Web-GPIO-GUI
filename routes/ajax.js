var rpio = require('rpio');


/* GET ajax response. */
module.exports = function(req, res) {
    
    if (req.body.hasOwnProperty('action')) {
        switch( req.body.action) {
            case 'write':
            
                /*gpio.setup(req.body.gpio, gpio.DIR_OUT, function() {
                    gpio.write(req.body.gpio, req.body.status, function(err) {
                        
                        res.contentType('json');
                        res.send({ gpio: req.body.gpio, status: req.body.status, error: err });
                        if (err) throw err;
                        console.log('Written to pin');
                    });
                });*/
                rpio.init({mapping: 'gpio'});
                rpio.open(req.body.gpio, rpio.OUTPUT, + req.body.status);
                rpio.write(req.body.gpio, + req.body.status);
                res.contentType('json');
                res.send({ gpio: req.body.gpio, status: req.body.status });
            
            break;
            case 'blink':
                /*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
            rpio.open(16, rpio.OUTPUT, rpio.LOW);

            /*
            * The sleep functions block, but rarely in these simple programs does
            * one care about that.  Use a setInterval()/setTimeout() loop instead
            * if it matters.
            */
            for (var i = 0; i < 5; i++) {
                    /* On for 1 second */
                    rpio.write(16, rpio.HIGH);
                    rpio.sleep(1);

                    /* Off for half a second (500ms) */
                    rpio.write(16, rpio.LOW);
                    rpio.msleep(500);
            }


        }
      
    }
    // res.contentType('json');
    // res.send({ some: req.body.action });

};
