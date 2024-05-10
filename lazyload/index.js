window.googletag = window.googletag || { cmd: [] };

googletag.cmd.push(function () {
  googletag
    .defineSlot("/6355419/Travel", [728, 90], "div-1")
    .setTargeting("test", "lazyload")
    .addService(googletag.pubads());
  googletag
    .defineSlot("/6355419/Travel", [728, 90], "div-2")
    .setTargeting("test", "lazyload")
    .addService(googletag.pubads());
  googletag
    .defineSlot("/6355419/Travel", [728, 90], "div-3")
    .setTargeting("test", "lazyload")
    .addService(googletag.pubads());

  googletag.pubads().enableLazyLoad({
    // Fetch slots within 5 viewports.
    fetchMarginPercent: 500,
    // Render slots within 2 viewports.
    renderMarginPercent: 200,
    // Double the above values on mobile, where viewports are smaller
    // and users tend to scroll faster.
    mobileScaling: 2.0,
  });

  googletag.pubads().addEventListener("slotRequested", function (event) {
    updateSlotStatus(event.slot.getSlotElementId(), "fetched");
  });

  googletag.pubads().addEventListener("slotOnload", function (event) {
    updateSlotStatus(event.slot.getSlotElementId(), "rendered");
  });

  googletag.enableServices();
});

function updateSlotStatus(slotId, state) {
  var elem = document.getElementById(slotId + "-" + state);
  elem.className = "activated";
  elem.innerText = "Yes";
}
