
    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("filteredNoiseMouse");

        var enviro = flock.init();

        // Expose any public functions or constructors as properties on your namesapce.
        filteredNoiseMouse.play = function () {
        var synth = flock.synth({
        synthDef: {
            ugen: "flock.ugen.filter.biquad.bp",
            freq: {
                ugen: "flock.ugen.mouse.cursor",
                options: {
                    interpolation: "exponential"
                },
                mul: -27,
                add: 68,
                //lag: 1
            },
            q: 12,
            source: {
                ugen: "flock.ugen.blit",
                freq: {
                    ugen: "flock.ugen.mouse.cursor",
                    //rate: "audio",
                    mul: 14,
                    add: 0.75
                },
                mul: 400
            }
        }
    });

            // If you're on iOS, you will need to call in a listener for
            // some kind of user input action, such a button click or touch handler.
            // This is because iOS will only play sound if the user initiated it.
            enviro.start();
        };

    }());