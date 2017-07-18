<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    @foreach($topics as $topic)
       <url>

          <loc>{{ route('web.viender.topic.pages.topic.show', $topic) }}</loc>

          <lastmod>{{ $topic->updated_at->format('Y-m-d') }}</lastmod>

          <priority>0.5</priority>

       </url>
    @endforeach

</urlset>
