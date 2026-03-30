export default function sitemap() {
  return [
    {
      url: 'https://boilerplate.it',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://boilerplate.it/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://boilerplate.it/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://boilerplate.it/services',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
