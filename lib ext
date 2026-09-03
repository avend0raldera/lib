export default function handler(req, res) {
  // Handle CORS so Tomeio can talk to your serverless function smoothly
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Tomeio-Config');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // The official Tomeio manifest for your library add-on
  const manifest = {
    id: 'org.tomeio.zlibclone',
    name: 'Library Genesis & Friends (1lib)',
    version: '1.0.0',
    description: 'A capability-based Tomeio add-on for 1lib.sk.',
    resources: [
      'catalog',
      'search',
      'meta',
      'resolve',
      'reviews',
      'acquisition',
      'reader',
      'library'
    ],
    types: ['book'],
    catalogs: [
      { type: 'book', id: 'trending-books', name: 'Trending & Popular' },
      { type: 'book', id: 'recent-uploads', name: 'Recently Added' }
    ],
    idPrefixes: ['zlib-'],
    behaviorHints: {
      configurable: true,
      configurationRequired: false
    }
  };

  // Route: Serve manifest when requested
  if (req.url.endsWith('/manifest.json') || req.url === '/' || req.url === '/api') {
    return res.status(200).json(manifest);
  }

  // Placeholder router for your other protocol endpoints
  if (req.url.includes('/search')) {
    return res.status(200).json({ results: [] });
  }

  if (req.url.includes('/meta')) {
    return res.status(200).json({ id: 'sample', title: 'Sample Book Metadata' });
  }

  if (req.url.includes('/resolve')) {
    return res.status(200).json({ resolvedUrl: 'https://example.com/download' });
  }

  // Default fallback response for other routes
  return res.status(200).json({ success: true, message: 'Tomeio endpoint active' });
}
