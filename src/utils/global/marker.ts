import markerSDK from '@marker.io/browser';
export async function initMarker() {
  // Only load marker if URL contains 'webflow'
  if (window.location.href.includes('webflow')) {
    await markerSDK.loadWidget({
      project: '677f9f92ac364d62267a0fc8',
    });
  }
}
