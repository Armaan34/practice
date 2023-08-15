import axios from "axios";
console.time();

axios
  .get("https://5938-49-204-22-28.ngrok-free.app/10/20")
  .then((res) => {
    console.log(res.data);
    console.timeEnd();
  })
  .catch((err) => {
    console.log(err);
  });
