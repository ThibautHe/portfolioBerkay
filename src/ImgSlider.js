let track;
const loadcall = () => {
  track = document.getElementById("image-track");
  if (track) {
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  } else {
    console.error("Element with ID 'image-track' not found.");
  }
};
const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  applyEffect(e)
};

export function applyOpacity()
{
  const projectImagesElement = document.querySelector(".project-images");
  const styles = window.getComputedStyle(projectImagesElement);

  // Get the width, including padding and border, but excluding margin
  const widthWithoutMargin = projectImagesElement.offsetWidth;

  // Get the left and right margin values and convert them to numbers
  const marginLeft = parseFloat(styles.marginLeft);

  // Calculate the total width, including margin
  const totalWidth = widthWithoutMargin //+ marginLeft + marginRight;

  // Use totalWidth in your calculations
  const maxDelta = totalWidth / 2;
  const divCenter = widthWithoutMargin/2 + marginLeft;

  for (const image of track.getElementsByClassName("image")) {

    const imageRect = image.getBoundingClientRect();
    const imageCenter = imageRect.left + imageRect.width / 2;
    const distanceFromCenter = Math.abs(divCenter - imageCenter);

    const maxOpacityDistance = maxDelta; // Adjust as needed
    const maxOpacity = 1; // Maximum opacity for the center elements

    const normalizedDistance = Math.min(distanceFromCenter, maxOpacityDistance) / maxOpacityDistance;
    const opacity = maxOpacity - normalizedDistance * 1.3;

    // Apply opacity to the image
    image.style.opacity = opacity;
  }

}

export function applyEffect(e)
{
  const mouseDelta = -(parseFloat(track.dataset.mouseDownAt) - e.clientX);

  const projectImagesElement = document.querySelector(".project-images");
  const styles = window.getComputedStyle(projectImagesElement);

  // Get the width, including padding and border, but excluding margin
  const widthWithoutMargin = projectImagesElement.offsetWidth;

  // Get the left and right margin values and convert them to numbers
  const marginLeft = parseFloat(styles.marginLeft);

  // Calculate the total width, including margin
  const totalWidth = widthWithoutMargin //+ marginLeft + marginRight;

  const maxDelta = totalWidth / 2;
  const divCenter = widthWithoutMargin/2 + marginLeft;

  const percentage = (mouseDelta / maxDelta) * 100;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 50),
    -50
  );

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, 0%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${50 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const imageRect = image.getBoundingClientRect();
    const imageCenter = imageRect.left + imageRect.width / 2;
    const distanceFromCenter = Math.abs(divCenter - imageCenter);

    const maxOpacityDistance = maxDelta; // Adjust as needed
    const maxOpacity = 1; // Maximum opacity for the center elements

    const normalizedDistance = Math.min(distanceFromCenter, maxOpacityDistance) / maxOpacityDistance;
    const opacity = maxOpacity - normalizedDistance * 1.3;

    // Apply opacity to the image
    image.style.opacity = opacity;
    image.dataset.percentage = nextPercentage;
  }
}
export default loadcall;


/*REFERENCE*/
/* https://codepen.io/Hyperplexed/pen/MWXBRBp */