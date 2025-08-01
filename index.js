const scriptURL = 'https://script.google.com/macros/s/AKfycby4JfhnasvsHk4AG5sfczJFo4dL9zT9QPCb-7H6OSetJj3Y2S6BgxKdZ7FmU5SDdiEN6w/exec'; // ← Yahan tumhara Google Apps Script web app URL aayega

const form = document.forms['contact-form']; // ← Form ka naam 'contact-form' hona chahiye

form.addEventListener('submit', e => {
  e.preventDefault(); // ← Form page reload na kare

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form) // ← Form data ko send karta hai
  })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => window.location.reload()) // ← Submit ke baad page reload
    .catch(error => console.error('Error!', error.message));
});
