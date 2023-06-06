let dannyCount = 300;
let lizzieCount = 300;
let rickyCount = 300;
let kaylaCount = 300;
let zachCount = 300;
let tioCount = 300;
let tioJaviCount = 300;
let nicoCount = 300;
let stewartCount = 300;
let larryCount = 300;
//  Select increment and decrement button elements
const dannyIncreaseEl = document.querySelector('#danny-increase');
const dannyDecreaseEl = document.querySelector('#danny-decrease');
const dannyMaxBidEl = document.querySelector('#danny-max-bid')
const dannyRosterSpots = document.querySelector('#danny-roster-spots')
const dannyCountEl = document.querySelector('#danny-count');

const lizzieIncreaseEl = document.querySelector('#lizzie-increase');
const lizzieDecreaseEl = document.querySelector('#lizzie-decrease');
const lizzieMaxBidEl = document.querySelector('#lizzie-max-bid')
const lizzieRosterSpots = document.querySelector('#lizzie-roster-spots')
const lizzieCountEl = document.querySelector('#lizzie-count');

const rickyIncreaseEl = document.querySelector('#ricky-increase');
const rickyDecreaseEl = document.querySelector('#ricky-decrease');
const rickyMaxBidEl = document.querySelector('#ricky-max-bid')
const rickyRosterSpots = document.querySelector('#ricky-roster-spots')
const rickyCountEl = document.querySelector('#ricky-count');

const kaylaIncreaseEl = document.querySelector('#kayla-increase');
const kaylaDecreaseEl = document.querySelector('#kayla-decrease');
const kaylaMaxBidEl = document.querySelector('#kayla-max-bid')
const kaylaRosterSpots = document.querySelector('#kayla-roster-spots')
const kaylaCountEl = document.querySelector('#kayla-count');

const zachIncreaseEl = document.querySelector('#zach-increase');
const zachDecreaseEl = document.querySelector('#zach-decrease');
const zachMaxBidEl = document.querySelector('#zach-max-bid')
const zachRosterSpots = document.querySelector('#zach-roster-spots')
const zachCountEl = document.querySelector('#zach-count');

const tioIncreaseEl = document.querySelector('#tio-increase');
const tioDecreaseEl = document.querySelector('#tio-decrease');
const tioMaxBidEl = document.querySelector('#tio-max-bid')
const tioRosterSpots = document.querySelector('#tio-roster-spots')
const tioCountEl = document.querySelector('#tio-count');

const tioJaviIncreaseEl = document.querySelector('#tiojavi-increase');
const tioJaviDecreaseEl = document.querySelector('#tiojavi-decrease');
const tioJaviMaxBidEl = document.querySelector('#tiojavi-max-bid')
const tioJaviRosterSpots = document.querySelector('#tiojavi-roster-spots')
const tioJaviCountEl = document.querySelector('#tiojavi-count');

const nicoIncreaseEl = document.querySelector('#nico-increase');
const nicoDecreaseEl = document.querySelector('#nico-decrease');
const nicoMaxBidEl = document.querySelector('#nico-max-bid')
const nicoRosterSpots = document.querySelector('#nico-roster-spots')
const nicoCountEl = document.querySelector('#nico-count');

const stewartIncreaseEl = document.querySelector('#stewart-increase');
const stewartDecreaseEl = document.querySelector('#stewart-decrease');
const stewartMaxBidEl = document.querySelector('#stewart-max-bid')
const stewartRosterSpots = document.querySelector('#stewart-roster-spots')
const stewartCountEl = document.querySelector('#stewart-count');

const larryIncreaseEl = document.querySelector('#larry-increase');
const larryDecreaseEl = document.querySelector('#larry-decrease');
const larryMaxBidEl = document.querySelector('#larry-max-bid')
const larryRosterSpots = document.querySelector('#larry-roster-spots')
const larryCountEl = document.querySelector('#larry-count');

// Attach event listener to increment button element
dannyDecreaseEl.addEventListener('click', function (event) {
  event.preventDefault();
  const bid = this.parentNode.firstChild.nextSibling.value;
  if(!bid) {
    alert('please enter a number')
    return
  }
  let newBid = parseInt(dannyCountEl.textContent);
  let newRoster = parseInt(dannyRosterSpots.textContent)
  dannyCountEl.textContent = newBid - parseInt(bid);
  dannyRosterSpots.textContent = newRoster - 1
  dannyMaxBidEl.textContent = parseInt(dannyCountEl.textContent) - (parseInt(dannyRosterSpots.textContent) - 1)
  //current budget - roster spots + 1
});

dannyIncreaseEl.addEventListener('click', function (event) {
  event.preventDefault();
  const bid = this.parentNode.firstChild.nextSibling.value;
  if(!bid) {
    alert('please enter a number')
    return
  }
  let newBid = parseInt(dannyCountEl.textContent);
  let newRoster = parseInt(dannyRosterSpots.textContent)
  dannyCountEl.textContent = parseInt(bid) + newBid;
  dannyRosterSpots.textContent = newRoster + 1
  dannyMaxBidEl.textContent = parseInt(dannyCountEl.textContent) - (parseInt(dannyRosterSpots.textContent) - 1)  
});

lizzieDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(lizzieCountEl.textContent);
    let newRoster = parseInt(lizzieRosterSpots.textContent)
    lizzieCountEl.textContent = newBid - parseInt(bid);
    lizzieRosterSpots.textContent = newRoster - 1
    lizzieMaxBidEl.textContent = parseInt(lizzieCountEl.textContent) - (parseInt(lizzieRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  lizzieIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(lizzieCountEl.textContent);
    let newRoster = parseInt(lizzieRosterSpots.textContent)
    lizzieCountEl.textContent = parseInt(bid) + newBid;
    lizzieRosterSpots.textContent = newRoster + 1
    lizzieMaxBidEl.textContent = parseInt(lizzieCountEl.textContent) - (parseInt(lizzieRosterSpots.textContent) - 1)  
  });
  
  rickyDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(rickyCountEl.textContent);
    let newRoster = parseInt(rickyRosterSpots.textContent)
    rickyCountEl.textContent = newBid - parseInt(bid);
    rickyRosterSpots.textContent = newRoster - 1
    rickyMaxBidEl.textContent = parseInt(rickyCountEl.textContent) - (parseInt(rickyRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  rickyIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(rickyCountEl.textContent);
    let newRoster = parseInt(rickyRosterSpots.textContent)
    rickyCountEl.textContent = parseInt(bid) + newBid;
    rickyRosterSpots.textContent = newRoster + 1
    rickyMaxBidEl.textContent = parseInt(rickyCountEl.textContent) - (parseInt(rickyRosterSpots.textContent) - 1)  
  });
  
  kaylaDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(kaylaCountEl.textContent);
    let newRoster = parseInt(kaylaRosterSpots.textContent)
    kaylaCountEl.textContent = newBid - parseInt(bid);
    kaylaRosterSpots.textContent = newRoster - 1
    kaylaMaxBidEl.textContent = parseInt(kaylaCountEl.textContent) - (parseInt(kaylaRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  kaylaIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(kaylaCountEl.textContent);
    let newRoster = parseInt(kaylaRosterSpots.textContent)
    kaylaCountEl.textContent = parseInt(bid) + newBid;
    kaylaRosterSpots.textContent = newRoster + 1
    kaylaMaxBidEl.textContent = parseInt(kaylaCountEl.textContent) - (parseInt(kaylaRosterSpots.textContent) - 1)  
  });
  
  zachDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(zachCountEl.textContent);
    let newRoster = parseInt(zachRosterSpots.textContent)
    zachCountEl.textContent = newBid - parseInt(bid);
    zachRosterSpots.textContent = newRoster - 1
    zachMaxBidEl.textContent = parseInt(zachCountEl.textContent) - (parseInt(zachRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  zachIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(zachCountEl.textContent);
    let newRoster = parseInt(zachRosterSpots.textContent)
    zachCountEl.textContent = parseInt(bid) + newBid;
    zachRosterSpots.textContent = newRoster + 1
    zachMaxBidEl.textContent = parseInt(zachCountEl.textContent) - (parseInt(zachRosterSpots.textContent) - 1)  
  });
  
  tioDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(tioCountEl.textContent);
    let newRoster = parseInt(tioRosterSpots.textContent)
    tioCountEl.textContent = newBid - parseInt(bid);
    tioRosterSpots.textContent = newRoster - 1
    tioMaxBidEl.textContent = parseInt(tioCountEl.textContent) - (parseInt(tioRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  tioIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(tioCountEl.textContent);
    let newRoster = parseInt(tioRosterSpots.textContent)
    tioCountEl.textContent = parseInt(bid) + newBid;
    tioRosterSpots.textContent = newRoster + 1
    tioMaxBidEl.textContent = parseInt(tioCountEl.textContent) - (parseInt(tioRosterSpots.textContent) - 1)  
  });
  
  tioJaviDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(tioJaviCountEl.textContent);
    let newRoster = parseInt(tioJaviRosterSpots.textContent)
    tioJaviCountEl.textContent = newBid - parseInt(bid);
    tioJaviRosterSpots.textContent = newRoster - 1
    tioJaviMaxBidEl.textContent = parseInt(tioJaviCountEl.textContent) - (parseInt(tioJaviRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  tioJaviIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(tioJaviCountEl.textContent);
    let newRoster = parseInt(tioJaviRosterSpots.textContent)
    tioJaviCountEl.textContent = parseInt(bid) + newBid;
    tioJaviRosterSpots.textContent = newRoster + 1
    tioJaviMaxBidEl.textContent = parseInt(tioJaviCountEl.textContent) - (parseInt(tioJaviRosterSpots.textContent) - 1)  
  });
  
  nicoDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(nicoCountEl.textContent);
    let newRoster = parseInt(nicoRosterSpots.textContent)
    nicoCountEl.textContent = newBid - parseInt(bid);
    nicoRosterSpots.textContent = newRoster - 1
    nicoMaxBidEl.textContent = parseInt(nicoCountEl.textContent) - (parseInt(nicoRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  nicoIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(nicoCountEl.textContent);
    let newRoster = parseInt(nicoRosterSpots.textContent)
    nicoCountEl.textContent = parseInt(bid) + newBid;
    nicoRosterSpots.textContent = newRoster + 1
    nicoMaxBidEl.textContent = parseInt(nicoCountEl.textContent) - (parseInt(nicoRosterSpots.textContent) - 1)  
  });
  
  stewartDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(stewartCountEl.textContent);
    let newRoster = parseInt(stewartRosterSpots.textContent)
    stewartCountEl.textContent = newBid - parseInt(bid);
    stewartRosterSpots.textContent = newRoster - 1
    stewartMaxBidEl.textContent = parseInt(stewartCountEl.textContent) - (parseInt(stewartRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  stewartIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(stewartCountEl.textContent);
    let newRoster = parseInt(stewartRosterSpots.textContent)
    stewartCountEl.textContent = parseInt(bid) + newBid;
    stewartRosterSpots.textContent = newRoster + 1
    stewartMaxBidEl.textContent = parseInt(stewartCountEl.textContent) - (parseInt(stewartRosterSpots.textContent) - 1)  
  });
  
  larryDecreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(larryCountEl.textContent);
    let newRoster = parseInt(larryRosterSpots.textContent)
    larryCountEl.textContent = newBid - parseInt(bid);
    larryRosterSpots.textContent = newRoster - 1
    larryMaxBidEl.textContent = parseInt(larryCountEl.textContent) - (parseInt(larryRosterSpots.textContent) - 1)
    //current budget - roster spots + 1
  });
  
  larryIncreaseEl.addEventListener('click', function (event) {
    event.preventDefault();
    const bid = this.parentNode.firstChild.nextSibling.value;
    if(!bid) {
      alert('please enter a number')
      return
    }
    let newBid = parseInt(larryCountEl.textContent);
    let newRoster = parseInt(larryRosterSpots.textContent)
    larryCountEl.textContent = parseInt(bid) + newBid;
    larryRosterSpots.textContent = newRoster + 1
    larryMaxBidEl.textContent = parseInt(larryCountEl.textContent) - (parseInt(larryRosterSpots.textContent) - 1)  
  });
  
                  


