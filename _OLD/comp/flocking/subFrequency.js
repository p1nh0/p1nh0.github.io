
    // Wrap everything in a function to keep your stuff private.
    (function () {

        // JavaScript strict mode is a good thing.
        "use strict";

        // Define a unique global namespace for your stuff.
        // You should change this to a namespace that is appropriate for your project.
        fluid.registerNamespace("subFrequency");

        var enviro = flock.init();

        // Expose any public functions or constructors as properties on your namesapce.
        subFrequency.play = function () {
            var mySynth = flock.synth({
                synthDef: {
                    ugen: "flock.ugen.sinOsc",
                    freq: {
                            ugen: "flock.ugen.asr",
                            attack: 30,
                            release: 10,
                            gate: {
                                ugen: "flock.ugen.mouse.click"
                            },
                            mul: 150,
                            add: 60,
                            options:{
                                interpolation: "cubic",
                                rate: "audio"
                            }
                    },
                    mul: 0.2
                }
        });

            // If you're on iOS, you will need to call in a listener for
            // some kind of user input action, such a button click or touch handler.
            // This is because iOS will only play sound if the user initiated it.
            enviro.start();
        };

    }());