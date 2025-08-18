export const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}/aboutme`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
