import { SITE } from '../lib/constants'

export function LocationMap() {
  const mapTitle = `Map showing ${SITE.name} at ${SITE.address.line1}, ${SITE.address.line2}`

  return (
    <div className="mapbox">
      <div className="map-embed-wrap">
        <iframe
          className="map-embed"
          src={SITE.address.mapsEmbedUrl}
          title={mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        className="map-open-link"
        href={SITE.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Google Maps →
      </a>
    </div>
  )
}
