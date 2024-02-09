export default function isValidAddress(websiteAddress) {
  var urlPattern = /^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(\/.*)*$/i;

  if (urlPattern.test(websiteAddress)) {
    return true;
  }
  return false;
}
