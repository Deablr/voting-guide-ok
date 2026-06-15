export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname === "/watch"
    ) {
      const videoId = parsed.searchParams.get("v")
      if (videoId) return `https://www.youtube.com/embed/${videoId}`
    }

    // https://www.youtube.com/live/VIDEO_ID
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname.startsWith("/live/")
    ) {
      const videoId = parsed.pathname.split("/live/")[1]
      if (videoId) return `https://www.youtube.com/embed/${videoId}`
    }

    // https://www.youtube.com/embed/VIDEO_ID
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname.startsWith("/embed/")
    ) {
      return url
    }

    // https://youtu.be/VIDEO_ID
    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1)
      if (videoId) return `https://www.youtube.com/embed/${videoId}`
    }

    return null
  } catch {
    return null
  }
}
