// linkResolver.js file

exports.LinkResolver = (doc) => {
  if (doc.type === 'about') {
    return `/${doc.uid}`
  }

  return '/'
}