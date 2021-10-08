// linkResolver.js file

exports.linkResolver = (doc) => {
  if (doc.type === 'about' || 'news_and_informations' || 'fees') {
    return `/${doc.uid}`
  } 
  return '/'
}