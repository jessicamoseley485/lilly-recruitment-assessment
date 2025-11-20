 //get a dictionary of the name and price of every medicine by fetching it from '/medicines'
 fetch('http://localhost:8000/medicines')
    .then(response => {
      return response.json();
    })
    .then(data => {
      //get the data from the dictionary using the associated keys
      var key = Object.keys(data);
      dataValuesList = data[key];
      //print out a list of the name and price of each medicine that doesn't have any null or blank values
      dataValuesList.forEach(medicine => {
        if (medicine.name != '' && medicine.price != null) {
          const markup = `<li>${medicine.name}: £${medicine.price}</li>`;
          //the data should be output within the 'ul' tags in 'index.html'
          document.querySelector(`ul`).insertAdjacentHTML('beforeend', markup);
        }
      });
            
  })