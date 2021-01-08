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
# start a server listening with 4,000 port.
$ bundle exec jekyll serve
```

## Deployment

We are working with GitHub to deploy the site to Netlify.