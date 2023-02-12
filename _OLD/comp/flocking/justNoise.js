
    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("justNoise");

        var enviro = flock.init();

        // Expose any public functions or constructors as properties on your namesapce.
        justNoise.play = function () {
            var synth = flock.synth({
                synthDef: {
                    ugen: "flock.ugen.filter.biquad.lp",
                    freq: {
                        ugen: "flock.ugen.asr",
                        attack: 1,
                        release: 0,
                        gate: {
                            ugen: "flock.ugen.mouse.click"
                        },
                        options{
                            rate: "audio"
                        },
                        add: 22050,
                        mul: -22000

                    },
                    source:{
                        ugen: "flock.ugen.whiteNoise",
                        freq: 1,
                        mul: 0.1,
                    }
            }
        });

            // If you're on iOS, you will need to call in a listener for
            // some kind of user input action, such a button click or touch handler.
            // This is because iOS will only play sound if the user initiated it.
            enviro.start();
        };

    }());