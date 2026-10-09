// Plants added from plain descriptions (no 3D file needed). Each plants/<id>.js calls
// EA.addSpecies with a `form` record. Ids under `photos` also have plants/<id>.photos.js,
// made from real photos by tools/from_photos.py. The daily routine adds to both lists.
EA.loadPlants(["scent-leaf","bitter-leaf","moringa","lemongrass","cocoyam","pawpaw","fluted-pumpkin","oil-palm","waterleaf","okra"], { photos: [] });
