Drukdruk!
=========


Quick mashup: 

Checks current user position, finds two nearest trainstations in stations.geojson, complains about congestion to the NS API.


It POSTs something like the following:

```
{
   "couldSit": false,
   "date": "2015-12-08",
   "happiness": "ANGRY",
   "secondClass": true,
   "serviceId": 841,
   "stationFrom": "UT",
   "stationTo": "CU"
}
```

to `http://feedback.ns-mlab.nl/v1/crowd`

