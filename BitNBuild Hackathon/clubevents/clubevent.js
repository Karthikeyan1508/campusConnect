function showEvents(category) {
    const eventContainer = document.getElementById('eventContainer');
    const upcomingEvents = document.querySelectorAll('.event-box.upcoming');
    const pastEvents = document.querySelectorAll('.event-box.past');
  
    if (category === 'upcoming') {
      upcomingEvents.forEach(event => event.style.display = 'block');
      pastEvents.forEach(event => event.style.display = 'none');
    } else if (category === 'past') {
      upcomingEvents.forEach(event => event.style.display = 'none');
      pastEvents.forEach(event => event.style.display = 'block');
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Your existing code for initializing tabs and events might be here
  
    // Example: Set the default tab to upcoming
    showEvents('upcoming');
  });
  