
    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("hiRhythm");

        var enviro = flock.init();

        // Expose any public functions or constructors as properties on your namesapce.
        hiRhythm.play = function () {
            var mySynth = flock.synth({
                synthDef: {
                    ugen: "flock.ugen.sinOsc",
                    freq: 4444, 
                    mul: {
                        ugen: "flock.ugen.lfNoise",
                        freq: {
                            ugen: "flock.ugen.asr",
                            attack: 30,
                            release: 10,
                            gate: {
                                ugen: "flock.ugen.mouse.click"
                            },
                            mul: 300,
                            add: 10,
                            options:{
                                interpolation: "cubic",
                                rate: "audio"
                            }
                        },
                        mul: 0.05,
                        add: 0,
                        options:{
                            rate: "audio"
                        }
                    },
                }
            });

            // If you're on iOS, you will need to call in a listener for
            // some kind of user input action, such a button click or touch handler.
            // This is because iOS will only play sound if the user initiated it.
            enviro.start();
        };

    }());