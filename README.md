# dash-mpd-parser

(Alpha) MPD fetcher + parser, extracted from dash.js.

This is a proof of concept for extracting isolated features from [dash.js](https://github.com/Dash-Industry-Forum/dash.js). It uses the dash.js's internal `DashParser`, but skips `XLinkController` checks, since this is just a demo.

`dash-mpd-parser` is neither tested nor production ready.

## Motivation

There's tons of useful stuff inside dash.js. All this would be useful even if you're not doing exactly what the dash.js project is developed for (streaming video, following the DASH-AVC/264 guidelines).

For instance, parsing and validating MPDs is a tedious task, and extracting that functionality into a separate package would be of great use for anyone dealing with MPDs.

Modularizing dash.js into its different different components would also:

1. make it easier to compose your own player;
2. make it easer to extend the functionality (f.i. audio-only or doing playback via the Web Audio API); and
3. make the source code(s) easier to enter and get your head around, thus making it easier to contribute.

## Usage

Fetching and parsing an MPD:

```js
import { fetchMpd } from 'dash-mpd-parser'

fetchMpd('http://example.com/video.mpd', mpd => {
  // Here's are parsed MPD!
  console.log(mpd)
})
```

Parsing an MPD if you've got the XML contents:

```js
import { parseMpd } from 'dash-mpd-parser'

parseMpd(xmlString, mpd => console.log(mod))
```
