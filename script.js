const headingElement = document.getElementById("heading");
const clickMeButton = document.getElementById("clickme")
function handleClick()
{
    headingElement.innerText = "Hello Saish";
}
clickMeButton.addEventListener("click", handleClick);