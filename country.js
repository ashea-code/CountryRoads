const takeMeHome = () => {
  const xpathTestAreLatest = "//span[text()='Latest Tweets']";
  const xpathAria = "//div[@aria-label='Top Tweets on']";
  const xpathSelectMenuButton = "//span[text()='See latest Tweets instead']";

  const testLatest = document.evaluate(xpathTestAreLatest,
                                       document,
                                       null,
                                       XPathResult.FIRST_ORDERED_NODE_TYPE,
                                       null).singleNodeValue;

  if (!testLatest) {
    console.log("Take me home...");
    const menuIcon = document.evaluate(xpathAria,
                                       document,
                                       null,
                                       XPathResult.FIRST_ORDERED_NODE_TYPE,
                                       null).singleNodeValue;
    menuIcon.onclick = (e) => {
      setTimeout(() => {
        const menuIcon = document.evaluate(xpathSelectMenuButton,
                                           document,
                                           null,
                                           XPathResult.FIRST_ORDERED_NODE_TYPE,
                                           null).singleNodeValue;
        menuIcon.click();
        console.log('...Country Roads.');
      }, 1000);
    };

    // Kick off this dumb macro
    menuIcon.click();
  } else {
    console.log('You are already home!');
  }
}

window.addEventListener("load", takeMeHome, false);
