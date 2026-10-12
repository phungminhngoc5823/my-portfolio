#!/usr/bin/env python3
"""Fill in the share/SEO tags once the site has a real address.

Usage:  python3 scripts/set-domain.py https://yourname.example   (no trailing slash needed)
Adds canonical, og:url, og:image (absolute), upgrades twitter:card to summary_large_image,
and writes public/robots.txt and public/sitemap.xml. Safe to run again with a new address.
"""
import os, re, sys
root = os.path.join(os.path.dirname(__file__), '..')
if len(sys.argv) != 2 or not sys.argv[1].startswith('http'):
    sys.exit('Usage: python3 scripts/set-domain.py https://your-site-address')
base = sys.argv[1].rstrip('/')
p = os.path.join(root, 'index.html'); s = open(p, encoding='utf8').read()
s = re.sub(r'\s*<link rel="canonical"[^>]*>', '', s)
s = re.sub(r'\s*<meta property="og:(?:url|image|image:width|image:height)"[^>]*>', '', s)
s = re.sub(r'\s*<meta name="twitter:image"[^>]*>', '', s)
s = s.replace('<meta name="twitter:card" content="summary" />', '<meta name="twitter:card" content="summary_large_image" />')
tags = (f'\n    <link rel="canonical" href="{base}/" />'
        f'\n    <meta property="og:url" content="{base}/" />'
        f'\n    <meta property="og:image" content="{base}/og-image.jpg" />'
        '\n    <meta property="og:image:width" content="1200" />'
        '\n    <meta property="og:image:height" content="630" />'
        f'\n    <meta name="twitter:image" content="{base}/og-image.jpg" />')
s = s.replace('<meta property="og:type" content="website" />', '<meta property="og:type" content="website" />' + tags, 1)
open(p, 'w', encoding='utf8').write(s)
open(os.path.join(root, 'public', 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n')
open(os.path.join(root, 'public', 'sitemap.xml'), 'w').write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>{base}/</loc></url></urlset>\n')
print('done for', base)
