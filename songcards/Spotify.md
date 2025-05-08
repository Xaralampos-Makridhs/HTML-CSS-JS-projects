"Μπλέ σειρήνες ουρλιαχτά και φακοί, νυχτερίδες μες' στα μαύρα Audi."
##  Spotify

# Gia Tin Koultoura Playlist

Για να ανοίξετε τον σύνδεσμο σε νέα καρτέλα, χρησιμοποιήστε τον παρακάτω HTML και JavaScript κώδικα:

```html
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gia Tin Koultoura Playlist</title>
</head>
<body>
  <!-- Σύνδεσμος για το Spotify -->
  <a href="https://open.spotify.com/playlist/1VOrAbio3g4d6BDv0um7GB?si=8d2a08ca82834323" class="spotify-link">Gia Tin Koultoura(G.T.K)</a>

  <!-- Το JavaScript που ανοίγει το link σε νέα καρτέλα -->
  <script>
    document.querySelector('.spotify-link').addEventListener('click', function(event) {
      event.preventDefault(); // Αποτρέπουμε την προεπιλεγμένη ενέργεια
      window.open(this.href, '_blank'); // Ανοίγουμε το σύνδεσμο σε νέα καρτέλα
    });
  </script>
</body>
</html>




