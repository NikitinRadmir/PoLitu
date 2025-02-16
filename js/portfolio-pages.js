document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.image-container').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const popupId = this.getAttribute('data-popup');
            document.getElementById('popupOverlay').style.display = 'block';
            document.getElementById(popupId).style.display = 'block';
        });
    });

    document.querySelectorAll('.popup-close').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('popupOverlay').style.display = 'none';
            document.querySelectorAll('.popup').forEach(function(popup) {
                popup.style.display = 'none';
            });
        });
    });

    document.getElementById('popupOverlay').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
        document.querySelectorAll('.popup').forEach(function(popup) {
            popup.style.display = 'none';
        });
    });
});