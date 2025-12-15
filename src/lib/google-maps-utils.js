/**
 * Extract coordinates from Google Maps URL
 * Supports various Google Maps URL formats:
 * - https://www.google.com/maps?q=lat,lng
 * - https://www.google.com/maps/@lat,lng,zoom
 * - https://maps.google.com/?q=lat,lng
 * - https://goo.gl/maps/...
 * - Place URLs: https://www.google.com/maps/place/.../@lat,lng
 */

export function extractCoordinatesFromGoogleMaps(url) {
  if (!url) return null;

  try {
    // Format 1: ?q=latitude,longitude
    const qMatch = url.match(/[?&]q=([+-]?\d+\.?\d*),([+-]?\d+\.?\d*)/);
    if (qMatch) {
      return {
        latitude: parseFloat(qMatch[1]),
        longitude: parseFloat(qMatch[2]),
      };
    }

    // Format 2: /@latitude,longitude,zoom
    const atMatch = url.match(/@([+-]?\d+\.?\d*),([+-]?\d+\.?\d*)/);
    if (atMatch) {
      return {
        latitude: parseFloat(atMatch[1]),
        longitude: parseFloat(atMatch[2]),
      };
    }

    // Format 3: Place URL with coordinates
    const placeMatch = url.match(/place\/[^@]+@([+-]?\d+\.?\d*),([+-]?\d+\.?\d*)/);
    if (placeMatch) {
      return {
        latitude: parseFloat(placeMatch[1]),
        longitude: parseFloat(placeMatch[2]),
      };
    }

    // Format 4: Search query (less reliable, but try to extract)
    const searchMatch = url.match(/[?&]q=([^&]+)/);
    if (searchMatch) {
      const query = decodeURIComponent(searchMatch[1]);
      // Try to find coordinates in query string
      const coordMatch = query.match(/([+-]?\d+\.?\d*),([+-]?\d+\.?\d*)/);
      if (coordMatch) {
        return {
          latitude: parseFloat(coordMatch[1]),
          longitude: parseFloat(coordMatch[2]),
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Error extracting coordinates:', error);
    return null;
  }
}


