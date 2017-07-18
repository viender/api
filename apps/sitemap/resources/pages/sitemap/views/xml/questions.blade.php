<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    @foreach($questions as $question)
       <url>

          <loc>{{ route('web.viender.socialite.pages.questionShow', $question->slug) }}</loc>

          <lastmod>{{ $question->updated_at }}</lastmod>

          <priority>0.5</priority>

       </url>
    @endforeach

</urlset>
