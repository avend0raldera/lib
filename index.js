export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Tomeio-Config');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

  // Serve manifest on root, /api, or /manifest.json paths
  return res.status(200).json(manifest);
}
