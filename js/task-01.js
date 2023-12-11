const categories = [...document.querySelector("#categories").children];

const numCategories = categories.length;
console.log(`Number of categories: ${numCategories}`);

categories.forEach((element) => {
    const subTitle = element.firstElementChild;
    const subTitleText = subTitle.textContent;
    console.log(`Category: ${subTitleText}`);

    const subList = subTitle.nextElementSibling;
    const numElements = subList.children.length;
    console.log(`Elements: ${numElements}`);
});
