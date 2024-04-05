document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    const items = document.querySelectorAll('.item');
  
    tags.forEach(tag => {
      tag.addEventListener('click', function() {
        const filter = tag.getAttribute('data-filter');
        filterItems(filter);
        toggleTagSelection(tag);
      });
    });
  
    function filterItems(filter) {
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
  
    function toggleTagSelection(selectedTag) {
      tags.forEach(tag => {
        if (tag === selectedTag) {
          tag.classList.add('selected');
        } else {
          tag.classList.remove('selected');
        }
      });
    }
  });
  