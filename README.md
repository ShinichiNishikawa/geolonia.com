# geolonia.com

## development

### prerequisite

#### MacOS

```shell
# the Privilege is required with the default Ruby runtime.
$ sudo gem install bundler
```

### develop with a local Jekyll server

```shell
$ git clone git@github.com:geolonia/geolonia.com.git
$ cd geolonia.com
$ bundle install --path=vendor
# start a server listening at http://localhost:4000.
$ bundle exec jekyll serve
```

## Deployment

We are working with GitHub to deploy the site to Netlify.