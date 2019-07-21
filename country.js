/**
MIT License

Copyright (c) 2019 Aaron Shea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/
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
