//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  const body = Array(document.querySelector("body"));
  for (i = 0; i < body.length; i++) {
    console.log(body[i]);
  };
  //  console.log(document.body.childNodes);
}
bodyNodes();
