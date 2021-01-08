# geolonia.com

## development

### prerequisite

We recommend to setup the Ruby runtime with version manager, such as [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://github.com/rvm/rvm). 

And install bundler to manage the ruby gems.

```
$ gem install bundler
```

### develop with a local Jekyll server

```shell
$ git clone git@github.com:geolonia/geolonia.com.git
$ cd geolonia.com
$ bundle install --path=vendor
# start a server listening at http://localhost:4000
$ bundle exec jekyll serve
```

## Deployment

We're deploying our website to Netlify, so you can push your commits via GitHub or create a pull request. That's it!