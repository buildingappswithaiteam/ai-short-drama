(() => {
  const search = document.getElementById('drama-search');
  const genre = document.getElementById('genre-filter');
  const cards = [...document.querySelectorAll('.drama-item')];
  const count = document.getElementById('drama-count');
  const noResults = document.getElementById('no-results');
  if (!search || !genre || !count || !noResults) return;

  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedGenre = genre.value;
    let visible = 0;
    for (const card of cards) {
      const matchesQuery = card.dataset.search.includes(query);
      const matchesGenre = !selectedGenre || card.dataset.genres.split(',').includes(selectedGenre);
      const show = matchesQuery && matchesGenre;
      card.hidden = !show;
      if (show) visible += 1;
    }
    count.textContent = `${visible} dramas`;
    noResults.hidden = visible !== 0;
  }

  search.addEventListener('input', filter);
  genre.addEventListener('change', filter);
})();
