<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    @foreach($users as $user)
       <url>

          <loc>{{ route('web.viender.profile.pages.profile', $user->username) }}</loc>

          <lastmod>{{ $user->updated_at }}</lastmod>

          <priority>0.5</priority>

       </url>
    @endforeach

</urlset>
