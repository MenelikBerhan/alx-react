function getFullYear() {
  const date = new Date();
  return (date.getFullYear());
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return ('Holberton School');
  }
  return ('Holberton School main dashboard');
}

function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

export { getFullYear, getFooterCopy, getLatestNotification };
