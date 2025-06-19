# frozen_string_literal: true

source "https://rubygems.org"

# gem "rails"

gem "jekyll", "~> 4.4.1"
gem 'jekyll-sass-converter', '~> 3.1'
gem "jekyll-feed"
gem "jekyll-seo-tag"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]


