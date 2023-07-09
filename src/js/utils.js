export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function deSlugify(text) {
  return text.split('-').join(' ');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined);
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(a.data.date) - new Date(b.data.date));
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

export function disableScroll /*on the whole page*/() {
  document.body.classList.add('stop-scrolling');
}

export function enableScroll /*on the whole page*/() {
  document.body.classList.remove('stop-scrolling');
}
