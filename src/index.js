import DashParser from 'dash.js/src/dash/DashParser.js'
import XLinkController from 'dash.js/src/streaming/controllers/XlinkController.js'

const parser = DashParser().create()

const getManifest = (url, cb) => {
  const req = new XMLHttpRequest()
  req.open('GET', url, false)
  req.responseType = 'application/mpd+xml'
  req.onreadystatechange = (evt) => {
    if (evt.target.readyState === 4) {
      cb(evt.target.response)
    }
  }
  req.send()
}

export const parseMpd = xml =>
  parser.parse(xml, '', XLinkController().create({}))

export const fetchMpd = (url, cb) =>
  getManifest(url, data => cb(parseMpd(data)))
