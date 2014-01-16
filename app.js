var Aquos = require("sharp-aquos-remote-control").Aquos;

var gw = new Aquos("192.168.1.106", 10002, "admin", "admin");

gw.connect(function(err) {
	if (err)
	{
		console.log(err);
		return;
	}

	// Turn on the power
	gw.power(true, function(err, data) {
		// Get the Input #
		gw.input(null, function(err, data) {
			if (err)
			{
				console.log(err);
				return;
			}
	
			// If input # is 5 (Component here)
			if (data == 5)
			{
				console.log("Input # is 5, setting volume to 15");

				// Set the volume to 15
				gw.volume(15, function(err, data) {
					if (!err)
						console.log("Volume set to 15");
				});
			}
			else
			{
				console.log("Input # is " + data + ", muting volume");

				gw.mute(true, function(err, data) {
					if (!err)
						console.log("Muted volume");
				});
			}
		});
	});
});
