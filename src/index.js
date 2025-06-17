import { findStringInsideAString } from './stringSearch';

(function() {
    const TEXT_TO_SEARCH = "The book is on the table!";
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        findStringInsideAString(searchTerm, TEXT_TO_SEARCH);
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Initialize
    searchInput.focus();
})();