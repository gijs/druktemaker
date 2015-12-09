Druktemaker
===========

A quick mashup that allows a one-button congestion report about the current train.

Note: Works only in the Netherlands.


Prototype
---------

[druktemaker.herokuapp.com](http://druktemaker.herokuapp.com/)


Why?
----

Dutch railroad operator Nederlandse Spoorwegen and its contractors spend lots of money on shiny trainstations but fail to invest in proper trains and infrastructure.

In an attempt to keep the travelers calm, they offer a service called 'druktemelder' (congestion reporter) which is built into their iOS and Android apps.

This 'druktemelder' feature is hidden five levels deep into the app. You first need to plan your current route, then drill down into the rail segment you're on. Then you need to answer some questions before being able to submit. Who is going to do that? 

As a UI developer I couldn't even find it at first.

So this is my little peaceful demonstration: A big button that reports / complains about the congestion in the train you're actually standing in.


Links to articles about NS failing (in Dutch)
---------------------------------------------

 - [http://nos.nl/artikel/2072287-ns-wacht-claim-van-reizigers-die-niet-kunnen-zitten.html](http://nos.nl/artikel/2072287-ns-wacht-claim-van-reizigers-die-niet-kunnen-zitten.html)
 - [http://nos.nl/artikel/2073405-dijksma-wil-voor-kerstmis-ns-plan-tegen-treinentekort.html](http://nos.nl/artikel/2073405-dijksma-wil-voor-kerstmis-ns-plan-tegen-treinentekort.html)
 - [http://nos.nl/video/2073416-dijksma-voor-kerst-moet-de-ns-een-plan-hebben.html](http://nos.nl/video/2073416-dijksma-voor-kerst-moet-de-ns-een-plan-hebben.html)
 - [http://nos.nl/artikel/2063325-dijsselbloem-ns-moet-geen-hamburgers-meer-bakken.html](http://nos.nl/artikel/2063325-dijsselbloem-ns-moet-geen-hamburgers-meer-bakken.html)
 - [http://nos.nl/nieuwsuur/artikel/2060759-ns-topman-wil-lestijden-wijzigen-vanwege-treinentekort.html](http://nos.nl/nieuwsuur/artikel/2060759-ns-topman-wil-lestijden-wijzigen-vanwege-treinentekort.html)
 - [http://nos.nl/artikel/2060784-scholen-kunnen-problemen-door-beroerd-inkoopbeleid-ns-niet-oplossen.html](http://nos.nl/artikel/2060784-scholen-kunnen-problemen-door-beroerd-inkoopbeleid-ns-niet-oplossen.html)


How it works
------------ 

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


Libraries used
--------------

- [Bootstrap](http://getbootstrap.com/) + [jQuery](https://jquery.com/) for basics
- [Turf.js](http://turfjs.org/) by [Mapbox](http://www.mapbox.com/) for geo functions
- [Mitmproxy](http://mitmproxy.org/) to check what the NS app sends over the air


Datasources
-----------

- [Trainstations](http://www.rijkswaterstaat.nl/apps/geoservices/geodata/dmc/nwb-spoorwegen/geogegevens/shapefile/01-12-2015/Treinstations/)
- [Distance matrix](http://www.rijdendetreinen.nl/over/open-data)
- [Railroads](https://www.pdok.nl/nl/producten/pdok-downloads/basis-registratie-topografie/topnl/topnl-actueel/top10nl)


Background images
-----------------

Randomly taken from [Twitter](https://twitter.com/search?q=%23treinleven&src=typd)

Screenshot
----------

![Druktemelder](http://i.imgur.com/o4kTFER.jpg)
