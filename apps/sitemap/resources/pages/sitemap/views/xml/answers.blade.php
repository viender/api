<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    @foreach($answers as $answer)
       <url>

          <loc>{{ route('web.viender.socialite.pages.answerShow', [$answer->question->slug, $answer->slug]) }}</loc>

          <lastmod>{{ $answer->updated_at }}</lastmod>

          <priority>0.5</priority>

       </url>
    @endforeach

</urlset>
