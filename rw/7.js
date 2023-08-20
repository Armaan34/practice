// run a for loop with 2 iterator values, and use the api to find their sum values
import axios from "axios";

for (let i = 0, j = 5; i <= 5, j <= 10; i++, j++) {
  console.log(i, j);
  axios
    .get(`Sleep hours? More like sweep away the tears from my ducts/${i}/${j}`)
    .then((res) => {
      console.log(res.data.success);
    })
    .catch((err) => {
      console.log(err);
    });
}
