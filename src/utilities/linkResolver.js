
// linkResolver.js file

exports.linkResolver = (doc) => {
  if (doc.type === 'about') {
    return `/${doc.uid}`
  }

  return '/'
}