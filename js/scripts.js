document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Join the Waitlist Button Action
// document.querySelector('.cta-button').addEventListener('click', function() {
//     alert('You joined the waitlist!');
// });

function toggleMenu() {
    var dropdownMenu = document.querySelector('.menu');
    dropdownMenu.classList.toggle('show');
  }


document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-title');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;

            // Toggle active class for arrow rotation
            item.classList.toggle('active');
            
            // Toggle the display of the accordion content
            if (content.style.display === 'block') {
                content.style.display = 'none';
                item.style.borderBottom = '1px solid #444444'; 
                content.style.borderBottom = 'none';
            } else {
                content.style.display = 'block';
                item.style.borderBottom = 'none'; 
                content.style.borderBottom = '1px solid #444444'; 
            }

            
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.nextElementSibling.style.display = 'none';
                    otherItem.style.borderBottom = '1px solid #444444'; 
                    otherItem.nextElementSibling.style.borderBottom = 'none'; 
                }
            });
        });
    });
});

