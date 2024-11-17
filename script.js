
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // Toggle between 'block' and 'none'
    if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
    } else {
      sidebar.style.display = 'block';
    }
  }