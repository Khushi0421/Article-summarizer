const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6d23faa89fmsh005ed0ba4425717p18a3aejsn97a7a07a243c",
      "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };
  
  fetch(url, options)
    .then((data) => {
      return data.json();
    })
  
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  const btn = document.querySelector(".btn");
  const summary = document.querySelector(".summary");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#url").value;
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;
    summary.innerText = "Please wait article is summarizing...."
  
    
  
    fetch(url, options)
      .then((data) => data.json())
      .then(data => {
      //   console.log(data?.summary);
      summary.innerText = data?.summary
      })
      .catch((error) => {
        console.log(error);
      });
  });